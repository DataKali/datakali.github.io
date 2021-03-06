$(document).ready(function () {
    
    /*var urlParams = new URLSearchParams(window.location.search);
    var lang = urlParams.get('lang');
    if (lang !== null) {
        portalLanguage = lang;
    }*/
    
    //IE/Edge doesn't support URLSearchParams, so use this function:
    var lang = getQueryVariable("lang");
    if (lang) {
        portalLanguage = lang;
    }
    
    //Only show the current language
    showCurrentLanguage(portalLanguage);
    $("*[data-portal-language='" + portalLanguage + "'] .dropup.languages .dropdown-toggle").html($('*[data-portal-language="' + portalLanguage + '"] .language-item[lang="' + portalLanguage + '"]').text() + ' <b class="caret"></b>');
    
    $(".language-item").click(function (e) {
        e.preventDefault();
        portalLanguage = $(this).attr('lang');
        $("*[data-portal-language='" + portalLanguage + "'] .dropup.languages .dropdown-toggle").html($(this).text() + ' <b class="caret"></b>');
        showCurrentLanguage(portalLanguage);
    });
    
    $(".category-more-toc").click(function (e) {
        e.preventDefault();
        $("*[data-portal-language='" + portalLanguage + "'] .portal-single-publication:not(:lt(" + categoriesShown + "))").toggle();
        $(this).find('.toggle-label').toggle();
    });
    
    //Show/hide more toc entries for featured contents section
    $(".more-toc").prev("ul").find("> li:not(:lt(" + shown + "))").hide();
    $(".more-toc").click(function (e) {
        e.preventDefault();
        var ul = $(this).prev("ul");
        ul.find("> li:not(:lt(" + shown + "))").toggle();
        //Featured sub topics show/hide
        $(this).find('.toggle-label').toggle();
    });
    
    $("input.search-field").focus();
});

function initChecklist(){
    //Not used for portal
}

function showCurrentLanguage(portalLanguage) {
    $("*[data-portal-language]").hide();
    var $portal_content = $('.portal-content');
    $portal_content.hide();
    if ($portal_content.length === 1) {$portal_content.show();}
    $("*[data-portal-language='" + portalLanguage + "']").closest('.portal-content').addBack().show();
    //Show/hide more category panels, only for the current language
    $("*[data-portal-language='" + portalLanguage + "'] .portal-single-publication:not(:lt(" + categoriesShown + "))").hide();
    var pageUrl = '?lang=' + portalLanguage;
    var pageTitle = languageTitleMap[portalLanguage];
    if (pageTitle) {$("html head title").text(pageTitle);}
    window.history.pushState('', '', pageUrl);
    addSearch();
}

function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}
