var store = {};store['en'] = {};


        $(document).ready(function () {
        
            
            index  = lunr(function () {

            

                this.field('title', {boost: 10});
                this.field('body');
                this.ref('id');
            

        


            });

            $(document).trigger('search.ready');
       }); 

        