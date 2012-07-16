(function ($) {
    // Register plugin
    $.fn.filestyle = function (option) {
        return this.each(function () {
            var $this = $(this)
           
            $this
                .css({'position':'absolute','top':'-100px','left':'-100px'})
                .parent()
                .addClass("filestyle-content form-search")
                .append('<input type="text" disabled size="40" /> '+
                    '<button class="btn btn-primary">Choose file</button>');
            
            $this.change(function () {
                $this.parent().children(':text').val($(this).val());
            });
            
            // Add event click
            $this.parent().children('button').click(function () {
                $this.click();
            });
        });
    }
})(jQuery);
