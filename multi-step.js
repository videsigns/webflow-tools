//Changelog 27-10-22 10:30am
// fixed multiple required fields issue
// possible fix to wrong alert thrown

var x = 0;
var curStep = 0;
var steps = $('[data-form="step"]');
var progressbarClone = $('[data-form="progress-indicator"]').clone();
var progressbar;
var fill = false;
var inputFilled = true;
var radioFilled = true;
var checkboxFilled = true;
var emailFilled = true;
var answer = "";
var selections = [];
var selection = [];
var empReqInput = [];

$(progressbarClone).removeClass("current");
$('[data-form="progress"]').children().remove();
$('[data-text="total-steps"]').text(
  $('[data-form="step"]:not([data-card="true"])').length
);
$('[data-form="submit-btn"]').hide();
$(steps[x]).data("card") ? (curStep = curStep + 0) : (curStep = curStep + 1);
$('[data-text="current-step"]').text(curStep);
steps.hide();

function disableBtn() {
  fill = false;
  //next button style
  $('[data-form="next-btn"]').css({
    opacity: "0.2",
    "pointer-events": "none",
  });
  //submit btn style
  $('[data-form="submit-btn"]').css({
    opacity: "0.5",
    "pointer-events": "none",
  });
}

function enableBtn() {
  fill = true;
  //next button style
  $('[data-form="next-btn"]').css({
    opacity: "1",
    "pointer-events": "auto",
  });
  //submit btn style
  $('[data-form="submit-btn"]').css({
    opacity: "1",
    "pointer-events": "auto",
  });
}

function updateStep() {
  empReqInput = [];

  $('[data-form="custom-progress-indicator"]').removeClass("current");
  $($('[data-form="custom-progress-indicator"]')[x]).addClass("current");

  //conditional logic
  selection = selections.filter((y) => y.step === x - 1);
  $("[data-answer]").hide();

  //hide unhide steps
  steps.hide();
  //window.Webflow && window.Webflow.require( 'ix2' ).init();
  $(steps[x]).fadeIn("slow");
  $(progressbar[x]).addClass("current");
  document.dispatchEvent(new Event("readystatechange"));

  if (selection.length > 0) {
    $(steps[x]).find(`[data-answer="${selection[0].selected}"]`).show();
  } else {
    $(steps[x]).find(`[data-answer="${answer}"]`).show();
    console.log($(steps[x]).find(`[data-answer="${answer}"]`).find(":input"));
  }

  //hide unhide button
  if (x === 0) {
    $('[data-form="back-btn"]').hide();
  } else if (
    x === steps.length - 1 ||
    $(steps[x]).find('[data-form="submit"]:visible').length > 0
  ) {
    $('[data-form="next-btn"]').hide();
    $('[data-form="submit-btn"]').show();
    $('[data-form="back-btn"]').show();
  } else {
    $('[data-form="next-btn"]').show();
    $('[data-form="back-btn"]').show();
    $('[data-form="submit-btn"]').hide();
  }

  //focus first input in every step
  $($(steps[x]).find("input[autofocus]")[0]).focus();
  $($(steps[x]).find("textarea[autofocus]")[0]).focus();

  //conditional logic
  selections = selections.filter((y) => y.step !== x);
  $(steps[x]).find(":input").trigger("input");
  validation();
}

function validateEmail(email) {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  console.log("email", email);
  if (!emailReg.test(email)) {
    emailFilled = false;
  } else {
    emailFilled = true;
  }
}

function validation(input) {
  if ($(steps[x]).data("card")) {
    enableBtn();
  }

  if ($(steps[x]).find("input[required]:visible").length > 0) {
    disableBtn();
  } else {
    enableBtn();
  }

  var checkCount = $(steps[x]).data("checkbox")
    ? $(steps[x]).data("checkbox")
    : 0;

  if (!$("[data-logic-extra]").data("logic-extra")) {
    if ($(steps[x]).find(":input").is('[type="checkbox"]')) {
      if (
        checkCount === "*" ||
        checkCount > $(steps[x]).find(':input[type="checkbox"]').length
      ) {
        $(steps[x])
          .find(':input[type="checkbox"]')
          .each(function () {
            if ($(this).is(":checked")) {
              if ($(steps[x]).find(":input[required]").length < 1) {
                checkboxFilled = true;
              }
            } else {
              checkboxFilled = false;
            }
          });
      } else {
        if (
          $(steps[x]).find(':input[type="checkbox"]:checked').length >=
          checkCount
        ) {
          checkboxFilled = true;
        } else {
          checkboxFilled = false;
        }
      }
    }

    if ($(steps[x]).find(":input[required]").is('[type="radio"]')) {
      if ($(steps[x]).find(':input[type="radio"]').is(":checked")) {
        radioFilled = true;
      } else {
        radioFilled = false;
      }
    }

    $(steps[x])
      .find(':input[type="text"][required]')
      .each(function (i) {
        if ($(this).val() !== "") {
          empReqInput = empReqInput.filter((y) => y.input !== i);
        } else {
          if (!empReqInput.find((y) => y.input === i)) {
            empReqInput.push({ input: i });
          }
        }

        if (empReqInput.length === 0) {
          inputFilled = true;
        } else {
          inputFilled = false;
        }
      });

    $(steps[x])
      .find(':input[type="email"][required]')
      .each(function () {
        if ($(this).val() !== "") {
          validateEmail($(this).val());
        } else {
          emailFilled = false;
        }
      });
  } else {
    console.log("logic extra");
    if (
      $(steps[x])
        .find("[data-answer]:visible")
        .find(":input")
        .is('[type="checkbox"]')
    ) {
      if (
        checkCount === "*" ||
        checkCount > $(steps[x]).find(':input[type="checkbox"]').length
      ) {
        $(steps[x])
          .find(':input[type="checkbox"]')
          .each(function () {
            if ($(this).is(":checked")) {
              if ($(steps[x]).find(":input[required]").length < 1) {
                answer = $(this).parents("[data-go-to]").attr("data-go-to");
                selections = selections.filter((y) => y.step !== x);
                selections.push({ step: x, selected: answer });
                checkboxFilled = true;
              }
            } else {
              checkboxFilled = false;
            }
          });
      } else {
        if (
          $(steps[x])
            .find("[data-answer]:visible")
            .find(':input[type="checkbox"]:checked').length >= checkCount
        ) {
          console.log($(steps[x]).find(":input[required]").length);
          if ($(steps[x]).find(":input[required]").length < 1) {
            answer = $(steps[x])
              .find("[data-answer]:visible")
              .find(':input[type="checkbox"]:checked')
              .parents("[data-go-to]")
              .attr("data-go-to");
            selections = selections.filter((y) => y.step !== x);
            selections.push({ step: x, selected: answer });
            checkboxFilled = true;
          }
        } else {
          checkboxFilled = false;
        }
      }
    }

    if (
      $(steps[x])
        .find("[data-answer]:visible")
        .find(":input[required]")
        .is('[type="radio"]')
    ) {
      if ($(steps[x]).find(':input[type="radio"]').is(":checked")) {
        radioFilled = true;
      } else {
        radioFilled = false;
      }
    }

    $(steps[x])
      .find("[data-answer]:visible")
      .find(':input[type="text"][required]')
      .each(function (y) {
        if ($(this).val() !== "") {
          answer = $(this).attr("data-go-to");
          selections = selections.filter((y) => y.step !== x);
          selections.push({ step: x, selected: answer });
          console.log(answer, x);
          empReqInput = empReqInput.filter((y) => y.input !== i);
        } else {
          if (!empReqInput.find((y) => y.input === i)) {
            empReqInput.push({ input: i });
          }
        }

        if (empReqInput.length === 0) {
          inputFilled = true;
        } else {
          inputFilled = false;
        }
      });

    $(steps[x])
      .find("[data-answer]:visible")
      .find(':input[type="email"][required]')
      .each(function (m) {
        if ($(this).val() !== "") {
          answer = $(this).attr("data-go-to");
          selections = selections.filter((y) => y.step !== x);
          selections.push({ step: x, selected: answer });

          validateEmail($(this).val());
        } else {
          emailFilled = false;
        }
      });
  }

  if (inputFilled && checkboxFilled && radioFilled && emailFilled) {
    enableBtn();
  } else {
    disableBtn();
  }
}

function nextStep() {
  if (x <= steps.length - 1) {
    x++;
    updateStep();

    $('[data-text="current-step"]').text(
      $(steps[x]).data("card")
        ? (curStep = curStep + 0)
        : (curStep = curStep + 1)
    );
  }
}

function backStep() {
  if (x > 0) {
    $(progressbar[x]).removeClass("current");
    x--;
    updateStep();
  }
  $('[data-text="current-step"]').text((curStep = curStep - 1));
}

$("body").on("keypress", function (e) {
  if (e.keyCode === 13 && fill) {
    console.log("enter");
    if ($("[data-enter]").data("enter")) {
      $('[data-form="next-btn"]')[0].click();
      e.preventDefault();
    } else {
      e.preventDefault();
    }
  }
});

$("body").keydown(function (event) {
  if ((event.metaKey || event.ctrlKey) && event.keyCode == 13) {
    if (x === steps.length - 1) {
      $("form").submit();
    } else {
      event.preventDefault();
    }
  }
});

$('[data-form="next-btn"]').on("click", function () {
  nextStep();
  $(steps[x]).find(":input").trigger("input");
});
$('[data-form="back-btn"]').on("click", function () {
  backStep();
});

$(steps)
  .find(":input")
  .on("input", function (input) {
    validation(input);
  });

$(steps)
  .find(":radio")
  .on("click", function () {
    if ($(steps[x]).find(":input").is(":checked")) {
      //conditional logic
      answer = $(steps[x])
        .find("input[type='radio']:checked")
        .attr("data-go-to");
      selections.push({ step: x, selected: answer });

      if ($(steps[x]).find("[data-radio-skip]").data("radio-skip") === true) {
        setTimeout(function () {
          nextStep();
        }, $(steps[x]).find("[data-radio-delay]").data("radio-delay"));
      }
    }
  });

$('[data-form="submit-btn"]').on("click", (e) => {
  e.preventDefault();
  $(this).prop("novalidate", true);
  $(steps).find(":input").prop("required", false);
  $("form").submit();
});

steps.each(function () {
  $('[data-form="progress"]').append(progressbarClone.clone());
});
progressbar = $('[data-form="progress"]').children();

updateStep();

//if(!$('[data-nav-btn]').data('nav-btn')){$('[data-nav-btn]').remove()}
//if(!$('[data-nav-progress]').data('nav-progress')){$('[data-nav-progress]').remove()}
//if(!$('[data-step-counter]').data('step-counter')){$('[data-step-counter]').remove()}
//if(!$('[data-next-btn]').data('step-counter')){$('[data-next-btn]').remove()}
//if(!$('[data-submit-btn]').data('step-counter')){$('[data-submit-btn]').remove()}
