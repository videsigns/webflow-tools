  //disable form submission
  $("form").on("keyup keypress", function (e) {
    var keyCode = e.keyCode || e.which;
    if (keyCode === 13) {
      e.preventDefault();
      return false;
    }
  });

  var queryString = window.location.search
  var urlParams = new URLSearchParams(queryString);

  $("[data-input]").each(function (x) {
    x++;
    var paramFlag = $(`[data-input="search-${x}"]`).data('url')
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

      if(paramFlag){
        var search = $(this).val();
        var url = new URL(window.location);
        url.searchParams.set(`search-${x}`, search);
        if(search === ''){
          url.searchParams.delete(`search-${x}`);
        }
        window.history.pushState({}, '', url);
      }
    });

    if(paramFlag){
      if(urlParams.get(`search-${x}`)){
        $(`[data-input="search-${x}"]`).val(urlParams.get(`search-${x}`))
        $(`[data-input="search-${x}"]`).trigger('input')
      }
    }
  });
