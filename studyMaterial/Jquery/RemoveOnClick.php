<?php
  $('document').ready(function(){
    $('div.message-wrapper ul li.status').append('<span><a class="hide" href="javascript:void(0)" style="color: rgb(61, 184, 186); float: right; padding-right: 10px; text-decoration: none;"> x </a></span>');
    $('div.message-wrapper ul li span a.hide').click(function(){
       $('div.message-wrapper').remove(); 
    });
});
</script>
?>
