<!DOCTYPE html>
<html lang="en">
  <head>
    <% base_tag %>
    <title><% if $MetaTitle %>$MetaTitle<% else %>$Title<% end_if %> &raquo; $SiteConfig.Title</title>
    $MetaTags(false)
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  </head>
  <body>
    <% include Header %>
    $Layout
    <% include Footer %>
    <div id="root"></div>
    <% require javascript($resourceURL('themes/silverstripe-reactstarter/dist/js/bundle.js')) %>
  </body>
</html>