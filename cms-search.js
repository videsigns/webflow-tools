//disable form submission
$("form").on("keyup keypress", function (e) {
  var keyCode = e.keyCode || e.which;
  if (keyCode === 13) {
    e.preventDefault();
    return false;
  }
});

$("[data-input]").each(function (x) {
  x++;
  $(`[data-search="cms-item-${x}"]`).hide();
  $(`[data-div="noResult-${x}"]`).hide();

  $(`[data-input="search-${x}"]`).on("input", function () {
    for (y of $(`[data-text="search-${x}"]`)) {
      if (
        $(y)
          .text()
          .toString()
          .toLowerCase()
          .includes($(this).val().toLowerCase()) &&
        $(this).val() !== ""
      ) {
        $(`[data-text="search-${x}"]:contains("${$(y).text()}")`)
          .parents(`[data-search="cms-item-${x}"]`)
          .show();
      } else {
        $(`[data-text="search-${x}"]:contains("${$(y).text()}")`)
          .parents(`[data-search="cms-item-${x}"]`)
          .hide();
      }
    }

    if (
      $(`[data-search="cms-item-${x}"][style="display: none;"]`).length ===
        $(`[data-search="cms-item-${x}"]`).length &&
      $(this).val() !== ""
    ) {
      console.log("No Result");
      $(`[data-div="noResult-${x}"]`).show();
    } else {
      $(`[data-div="noResult-${x}"]`).hide();
    }
  });
});
