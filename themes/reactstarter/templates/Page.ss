<!DOCTYPE html>
<html lang="en">
  <head>
    <% base_tag %>
    <title><% if $MetaTitle %>$MetaTitle<% else %>$Title<% end_if %> &raquo; $SiteConfig.Title</title>
    $MetaTags(false)
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  </head>
  <body>
    $Layout
    <div id="root"></div>
    <% require javascript($resourceURL('themes/reactstarter/build/js/bundle.js')) %>
  </body>
</html>
