//7-2-22 Text area update

var x = 0;
var curStep = 0;
var steps = $('[data-form="step"]');
var progressbarClone = $('[data-form="progress-indicator"]').clone();
var progressbar;
var fill = false;
var inputFilled = true;
var selectFilled = true;
var radioFilled = true;
var checkboxFilled = true;
var emailFilled = true;
var textareaFilled = true;
var answer = "";
var selections = [];
var selection = [];
var empReqInput = [];
var empReqSelect = [];
var empReqTextarea = [];
var reinitIX = $("[data-reinit]").data("reinit");
var textareaLength = 0;
var textInputLength = 0;
var emailInputLength = 0;
var selectInputLength = 0;
var checkboxInputLength = 0;
var filledInput = [];
var savedFilledInput = JSON.parse(localStorage.getItem("filledInput"));
var memory = $("[data-memory]").data("memory");
var quiz = $("[data-quiz]").data("quiz");
var progress = 0;
const url = new URL(window.location.href);
let params = $("[data-query-param]").data("query-param");
var skipTo = 0;
var next = false;
let selArr = [];
let selString = [];
let emptyInput = 0;
let searchQ = [];
let domainAllowed = true;

$(progressbarClone).removeClass("current");
$('[data-form="progress"]').children().remove();
$('[data-text="total-steps"]').text(
  $('[data-form="step"]:not([data-card="true"])').length
);
$('[data-form="submit-btn"]').hide();
$(steps[x]).data("card") ? (curStep = curStep + 0) : (curStep = curStep + 1);
$('[data-text="current-step"]').text(curStep);
steps.hide();

function getParams() {
  url.searchParams.forEach(function (val, key) {
    searchQ.push({ val, key });
  });
}

function getSafe(fn, defaultVal) {
  try {
    return fn();
  } catch (e) {
    return defaultVal;
  }
}

if (savedFilledInput && memory) {
  savedFilledInput.forEach((x) => {
    if (
      $(`input[name="${x.inputName}"][value="${x.value}"]`).attr("type") ===
      "radio"
    ) {
      $(`input[name="${x.inputName}"][value="${x.value}"]`).click();
      $(`input[name="${x.inputName}"][value="${x.value}"]`)
        .siblings(".w-radio-input")
        .addClass("w--redirected-checked");
    } else if (x.value === "on") {
      $(`input[name="${x.inputName}"]`).click();
      $(`input[name="${x.inputName}"]`)
        .siblings(".w-checkbox-input")
        .addClass("w--redirected-checked");
    } else {
      $(`input[name="${x.inputName}"]`).val(x.value);
      $(`textarea[name="${y.key}"]`).val(y.val);
    }
  });
}

if (params) {
  getParams();
  searchQ.forEach((y) => {
    console.log(y, $(`input[value="${y.val}"]`).attr("type"));
    if (
      $(`input[name="${y.key}"][value="${y.val}"]`).attr("type") === "radio"
    ) {
      console.log("radio");
      $(`input[name="${y.key}"][value="${y.val}"]`).click();
      $(`input[name="${y.key}"][value="${y.val}"]`)
        .siblings(".w-radio-input")
        .addClass("w--redirected-checked");
    } else if (y.val === "on") {
      $(`input[name="${y.key}"]`).click();
      $(`input[name="${y.key}"]`)
        .siblings(".w-checkbox-input")
        .addClass("w--redirected-checked");
    } else {
      $(`input[name="${y.key}"]`).val(y.val);
      $(`textarea[name="${y.key}"]`).val(y.val);
    }
  });
}

if (quiz) {
  steps.each(function () {
    $(this).children().attr("data-radio-skip", true);
    $(this).children().attr("data-radio-delay", 250);
  });
}

function disableBtn() {
  fill = false;
  //next button style
  $('[data-form="next-btn"]').css({
    opacity: "0.4",
    "pointer-events": "none",
  });
  $('[data-form="next-btn"]').addClass("disabled");
  //submit btn style
  $('[data-form="submit-btn"]').css({
    opacity: "0.4",
    "pointer-events": "none",
  });
  $('[data-form="submit-btn"]').addClass("disabled");
}

function enableBtn() {
  fill = true;
  //next button style
  $('[data-form="next-btn"]').css({
    "pointer-events": "auto",
    opacity: "1",
  });
  $('[data-form="next-btn"]').removeClass("disabled");
  //submit btn style
  $('[data-form="submit-btn"]').css({
    "pointer-events": "auto",
    opacity: "1",
  });
  $('[data-form="submit-btn"]').removeClass("disabled");
}

function saveFilledInput() {
  $('form[data-form="multistep"] :input')
    .not('[type="submit"]')
    .each(function () {
      if (
        $(this).attr("type") === "checkbox" ||
        $(this).attr("type") === "radio"
      ) {
        if ($(this).prop("checked")) {
          if (filledInput.some((e) => e.inputName === $(this).attr("name"))) {
            filledInput = filledInput.filter(
              (e) => e.inputName !== $(this).attr("name")
            );

            if ($(this).val() !== "") {
              filledInput.push({
                inputName: $(this).attr("name"),
                value: $(this).val(),
              });
            }
          } else {
            if ($(this).val() !== "") {
              filledInput.push({
                inputName: $(this).attr("name"),
                value: $(this).val(),
              });
            }
          }
        }
      } else {
        if (filledInput.some((e) => e.inputName === $(this).attr("name"))) {
          filledInput = filledInput.filter(
            (e) => e.inputName !== $(this).attr("name")
          );

          if ($(this).val() !== "") {
            filledInput.push({
              inputName: $(this).attr("name"),
              value: $(this).val(),
            });
          }
        } else {
          if ($(this).val() !== "") {
            filledInput.push({
              inputName: $(this).attr("name"),
              value: $(this).val(),
            });
          }
        }
      }
    });
  //console.log(filledInput)
  if (filledInput) {
    filledInput.forEach((x) => {
      //console.log(x)
      url.searchParams.delete(x.inputName);
      url.searchParams.set(x.inputName, x.value);
      window.history.replaceState(null, null, url); // or pushState
    });
  }

  localStorage.removeItem("filledInput");
  localStorage.setItem("filledInput", JSON.stringify(filledInput));
  //console.log(savedFilledInput)
}

function updateStep() {
  inputFilled = true;
  radioFilled = true;
  checkboxFilled = true;
  selectFilled = true;
  textareaFilled = true;
  emailFilled = true;
  emptyInput = 0;
  empReqInput = [];
  empReqSelect = [];
  empReqTextarea = [];

  //custom clickable progress indicator
  if ($("[data-clickable]").data("clickable")) {
    console.log("clickable indicator");
    steps.find(":input[required]").each(function () {
      $(
        $('[data-form="custom-progress-indicator"]')[
          $(this).parents('[data-form="step"]').index()
        ]
      ).text(
        $(
          $('[data-form="custom-progress-indicator"]')[
            $(this).parents('[data-form="step"]').index()
          ]
        )
          .text()
          .replace("*", "")
      );
      if ($(this).val() === "") {
        emptyInput++;
        $(
          $('[data-form="custom-progress-indicator"]')[
            $(this).parents('[data-form="step"]').index()
          ]
        ).append("*");
      }
    });
    if (emptyInput > 0) {
      $('input[type="submit"]').addClass("disabled");
    } else {
      $('input[type="submit"]').removeClass("disabled");
    }
  }

  $('[data-form="custom-progress-indicator"]').removeClass("current");
  $($('[data-form="custom-progress-indicator"]')[x]).addClass("current");

  //conditional logic
  selection = selections.filter((y) => y.step === x - 1);
  //console.log(x,selections,selection)
  //console.log(selection[0], 'updating steps')

  if (next) {
    x = getSafe(() => selection[0]["skipTo"])
      ? parseInt(getSafe(() => selection[0]["skipTo"]))
      : x;
  }

  //console.log(x)
  $("[data-answer]").hide();

  //hide unhide steps
  steps.hide();
  if (reinitIX === true) {
    window.Webflow.destroy();
  }

  $(progressbar[x]).addClass("current");
  if (reinitIX === true) {
    window.Webflow && window.Webflow.require("ix2").init();
    document.dispatchEvent(new Event("readystatechange"));
    $(steps[x]).show();
  } else {
    $(steps[x]).fadeIn("slow");
  }

  if (x === 0 && !$(steps[x]).data("card")) {
    $(steps[x]).find(`[data-answer]`).show();
  }

  if (selection.length > 0) {
    $(steps[x]).find(`[data-answer="${selection[0].selected}"]`).show();
  } else {
    $(steps[x]).find(`[data-answer="${answer}"]`).show();
    //console.log($(steps[x]).find(`[data-answer="${answer}"]`).find(':input'))
  }

  //hide unhide button
  if (x === 0) {
    $('[data-form="back-btn"]').hide();
    $('[data-form="next-btn"]').show();
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

  //$(steps[x]).find(':input').trigger('input');
  validation();

  for (idx = 0; idx <= progress; idx++) {
    $($('[data-form="custom-progress-indicator"]')[idx]).removeClass(
      "disabled"
    );
  }
}

function validateEmail(email) {
  let domainEntered = email.includes("@")
    ? email.split("@")[1].split(".")[0]
    : [];
  let dom = [];
  let blockedDomain = $("[data-block-domain]").data("block-domain").split(",");
  $("[data-block-domain]")
    .data("block-domain")
    .split(",")
    .forEach(function (x) {
      //console.log(x, domainEntered)
      if (x.includes(domainEntered)) {
        dom.push(domainEntered);
      }
    });
  if (dom.length > 0) {
    domainAllowed = false;
  } else {
    domainAllowed = true;
  }

  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,20})?$/;
  //console.log('email', email)
  if (!emailReg.test(email)) {
    emailFilled = false;
  } else {
    emailFilled = true;
  }
}

function validation() {
  //conditional logic

  if ($(steps[x]).data("card")) {
    enableBtn();
  }

  textareaLength = $(steps[x]).find("textarea[required]:visible").length;
  textInputLength = $(steps[x]).find(
    'input[type="text"][required]:visible'
  ).length;
  selectInputLength = $(steps[x]).find("select[required]:visible").length;
  emailInputLength = $(steps[x]).find('input[type="email"]:visible').length;
  checkboxInputLength = $(steps[x]).find(
    'input[type="checkbox"]:visible'
  ).length;

  if (textInputLength > 0 || selectInputLength > 0 || textareaLength > 0) {
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
      .find("select[required]")
      .each(function (i) {
        if ($(this).val() !== "") {
          empReqSelect = empReqSelect.filter((y) => y.input !== i);
        } else {
          if (!empReqSelect.find((y) => y.input === i)) {
            empReqSelect.push({ input: i });
          }
        }

        if (empReqSelect.length === 0) {
          selectFilled = true;
        } else {
          selectFilled = false;
        }
      });

    $(steps[x])
      .find("textarea[required]")
      .each(function (i) {
        if ($(this).val() !== "") {
          empReqTextarea = empReqTextarea.filter((y) => y.input !== i);
        } else {
          if (!empReqTextarea.find((y) => y.input === i)) {
            empReqTextarea.push({ input: i });
          }
        }

        if (empReqTextarea.length === 0) {
          textareaFilled = true;
        } else {
          textareaFilled = false;
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
    //////////////////////////////////logic extra validation//////////////////////////////////////////////////
    if ($(steps[x]).data("card")) {
      answer = $(steps[x]).find("[data-go-to]").data("go-to");
      selections = selections.filter((y) => y.step !== x);
      selections.push({ step: x, selected: answer });
    }

    ///////////////////////////////////checkbox validation//////////////////////////////////////
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
                if ($(this).parents("[data-go-to]").attr("data-go-to")) {
                  answer = $(this).parents("[data-go-to]").attr("data-go-to");
                  selections = selections.filter((y) => y.step !== x);
                  selections.push({ step: x, selected: answer });
                }
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
          //console.log($(steps[x]).find(':input[required').length);
          //if ($(steps[x]).find(':input[required]').length < 1) {

          if (
            $(steps[x])
              .find("[data-answer]:visible")
              .find(':input[type="checkbox"]:checked')
              .parents("[data-go-to]")
              .attr("data-go-to")
          ) {
            answer = $(steps[x])
              .find("[data-answer]:visible")
              .find(':input[type="checkbox"]:checked')
              .parents("[data-go-to]")
              .attr("data-go-to");
            selections = selections.filter((y) => y.step !== x);
            selections.push({ step: x, selected: answer });
          }
          selections = selections.filter((y) => y.step !== x);
          selections.push({ step: x, selected: answer });
          checkboxFilled = true;
          //}
        } else {
          checkboxFilled = false;
        }
      }
    }

    ////////////////////////////////////radio input validation////////////////////////////////////////////
    if (
      $(steps[x])
        .find("[data-answer]:visible")
        .find(":input[required]")
        .is('[type="radio"]')
    ) {
      if (
        $(steps[x])
          .find("[data-answer]:visible")
          .find(':input[type="radio"][required]')
          .is(":checked")
      ) {
        radioFilled = true;
      } else {
        radioFilled = false;
      }
    } else {
      radioFilled = true;
    }

    ////////////////////////////text input validation/////////////////////////////////////
    $(steps[x])
      .find("[data-answer]:visible")
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
      .find("[data-answer]:visible")
      .find(':input[type="text"]')
      .each(function (i) {
        if ($(this).parents("[data-skip-to]").data("skip-to") !== "") {
          skipTo = $(this).parents("[data-skip-to]").data("skip-to");
        }
        if ($(this).parents("[data-go-to]").attr("data-go-to")) {
          answer = $(this).parents("[data-go-to]").attr("data-go-to");
          selections = selections.filter((y) => y.step !== x);
          selections.push({ step: x, selected: answer });
          if (skipTo) {
            objIndex = selections.findIndex((obj) => obj.step === x);
            selections[objIndex].skipTo = parseInt(skipTo) - 1;
            selections[objIndex].backTo = x;
          }
        }
      });

    ////////////////////////////number input validation/////////////////////////////////////
    $(steps[x])
      .find("[data-answer]:visible")
      .find(':input[type="number"][required]')
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
      .find("[data-answer]:visible")
      .find(':input[type="number"]')
      .each(function (i) {
        if ($(this).parents("[data-skip-to]").data("skip-to") !== "") {
          skipTo = $(this).parents("[data-skip-to]").data("skip-to");
        }
        if ($(this).parents("[data-go-to]").attr("data-go-to")) {
          answer = $(this).parents("[data-go-to]").attr("data-go-to");
          selections = selections.filter((y) => y.step !== x);
          selections.push({ step: x, selected: answer });
          if (skipTo) {
            objIndex = selections.findIndex((obj) => obj.step === x);
            selections[objIndex].skipTo = parseInt(skipTo) - 1;
            selections[objIndex].backTo = x;
          }
        }
      });

    ////////////////////////////select input validation///////////////////////////////////
    $(steps[x])
      .find("[data-answer]:visible")
      .find("select[required]")
      .each(function (i) {
        if ($(this).val() !== "") {
          empReqSelect = empReqSelect.filter((y) => y.input !== i);
        } else {
          if (!empReqSelect.find((y) => y.input === i)) {
            empReqSelect.push({ input: i });
          }
        }

        if (empReqSelect.length === 0) {
          selectFilled = true;
        } else {
          selectFilled = false;
        }
      });

    $(steps[x])
      .find("[data-answer]:visible")
      .find("select")
      .each(function (i) {
        if ($(this).parents("[data-skip-to]").data("skip-to") !== "") {
          skipTo = $(this).parents("[data-skip-to]").data("skip-to");
        }
        if ($(this).parents("[data-go-to]").attr("data-go-to")) {
          answer = $(this).parents("[data-go-to]").attr("data-go-to");
          selections = selections.filter((y) => y.step !== x);
          selections.push({ step: x, selected: answer });
          if (skipTo) {
            objIndex = selections.findIndex((obj) => obj.step === x);
            selections[objIndex].skipTo = parseInt(skipTo) - 1;
            selections[objIndex].backTo = x;
          }
        }
      });

    ////////////////////////////textarea validation////////////////////////////////
    $(steps[x])
      .find("[data-answer]:visible")
      .find("textarea[required]")
      .each(function (i) {
        if ($(this).val() !== "") {
          empReqTextarea = empReqTextarea.filter((y) => y.input !== i);
        } else {
          if (!empReqTextarea.find((y) => y.input === i)) {
            empReqTextarea.push({ input: i });
          }
        }

        if (empReqTextarea.length === 0) {
          textareaFilled = true;
        } else {
          textareaFilled = false;
        }
      });

    $(steps[x])
      .find("[data-answer]:visible")
      .find("textarea")
      .each(function (i) {
        if ($(this).parents("[data-skip-to]").data("skip-to") !== "") {
          skipTo = $(this).parents("[data-skip-to]").data("skip-to");
        }
        if ($(this).parents("[data-go-to]").attr("data-go-to")) {
          answer = $(this).parents("[data-go-to]").attr("data-go-to");
          selections = selections.filter((y) => y.step !== x);
          selections.push({ step: x, selected: answer });
          if (skipTo) {
            objIndex = selections.findIndex((obj) => obj.step === x);
            selections[objIndex].skipTo = parseInt(skipTo) - 1;
            selections[objIndex].backTo = x;
          }
        }
      });

    ///////////////////////////email validation//////////////////////////////////////
    $(steps[x])
      .find("[data-answer]:visible")
      .find(':input[type="email"][required]')
      .each(function (m) {
        if ($(this).val() !== "") {
          validateEmail($(this).val());
        } else {
          emailFilled = false;
        }
      });

    $(steps[x])
      .find("[data-answer]:visible")
      .find(':input[type="email"]')
      .each(function (m) {
        if ($(this).parents("[data-skip-to]").data("skip-to") !== "") {
          skipTo = $(this).parents("[data-skip-to]").data("skip-to");
        }
        if ($(this).parents("[data-go-to]").attr("data-go-to")) {
          answer = $(this).parents("[data-go-to]").attr("data-go-to");
          selections = selections.filter((y) => y.step !== x);
          selections.push({ step: x, selected: answer });
          if (skipTo) {
            objIndex = selections.findIndex((obj) => obj.step === x);
            selections[objIndex].skipTo = parseInt(skipTo) - 1;
            selections[objIndex].backTo = x;
          }
        }
      });
  }
  //console.log('validating', selections)
  //console.log('input',inputFilled,'checkbox',checkboxFilled,'radio',radioFilled,'email',emailFilled)
  if (
    inputFilled &&
    checkboxFilled &&
    radioFilled &&
    emailFilled &&
    domainAllowed &&
    selectFilled &&
    textareaFilled
  ) {
    enableBtn();
  } else {
    disableBtn();
  }
}

function nextStep() {
  x++;
  if (x > progress) {
    progress = x;
  }

  if (x <= steps.length - 1) {
    //console.log(x, steps.length - 1)
    updateStep();
    if (memory) {
      saveFilledInput();
    }

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
    //console.log('curIDX',x,selections.filter(sk => sk.skipTo === x).length)
    selections.filter((sk) => sk.skipTo === x).length > 0
      ? (x = parseInt(
          getSafe(() => selections.filter((sk) => sk.skipTo === x)[0].backTo)
        ))
      : x--;

    updateStep();
  }
  $('[data-text="current-step"]').text((curStep = curStep - 1));
}

$("body").on("keypress", function (e) {
  if (e.keyCode === 13 && fill) {
    //console.log('enter');
    if ($("[data-enter]").data("enter")) {
      $('[data-form="next-btn"]')[0].click();
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      e.stopPropagation();
    }
  }
});

$("body").keydown(function (event) {
  if ((event.metaKey || event.ctrlKey) && event.keyCode == 13) {
    //console.log(x, steps.length - 1)
    if (x >= steps.length - 1) {
      $('[data-form="submit-btn"]').click();
    } else {
      //console.log('not submitting')
      event.preventDefault();
      event.stopPropagation();
    }
  }
});

function selectionQuiz() {
  if ($(this).find('[data-btn="check"]')) {
    $("[data-selection]").hide();
    if ($(`[data-selection="${selString}"]`).data("selection")) {
      $(`[data-selection="${selString}"]`).fadeIn();
    } else {
      $('[data-selection="other"]').fadeIn();
    }
  }
}

$('[data-form="next-btn"]').on("click", function () {
  next = true;
  nextStep();
  selectionQuiz();
});

$('[data-form="back-btn"]').on("click", function () {
  next = false;
  backStep();
});

$(steps)
  .find(":input")
  .on("input", function (input) {
    validation();
  });

$(steps)
  .find(":radio")
  .on("click", function () {
    if ($(steps[x]).find(":input").is(":checked")) {
      if ($(this).parents("[data-skip-to]").data("skip-to")) {
        skipTo = $(this).parents("[data-skip-to]").data("skip-to");
      } else if ($(this).data("skip-to")) {
        skipTo = $(this).data("skip-to");
      }
      selArr = [];
      $(steps)
        .find("[data-selected]:checked")
        .each(function (y, i) {
          selArr.push({ selected: $(this).data("selected") });
        });

      selString = [];
      selArr.forEach((sel) => selString.push(sel.selected));
      //console.log('selected array', selString)

      $(steps[x])
        .find("[data-answer]:visible")
        .find(":input[type='radio']:checked")
        .each(function () {
          if ($(this).data("go-to")) {
            answer = $(this).attr("data-go-to");
            //console.log('radio',answer)
            selections = selections.filter((y) => y.step !== x);
            selections.push({ step: x, selected: answer });
            //console.log('selection', skipTo)
            if (skipTo) {
              //console.log('radio skipping to ', skipTo)
              objIndex = selections.findIndex((obj) => obj.step === x);
              selections[objIndex].skipTo = parseInt(skipTo) - 1;
              selections[objIndex].backTo = x;
            }
          } else if ($(this).parents("[data-go-to]").data("go-to")) {
            answer = $(this).parents("[data-go-to]").data("go-to");
            selections = selections.filter((y) => y.step !== x);
            selections.push({ step: x, selected: answer });
            if (skipTo) {
              objIndex = selections.findIndex((obj) => obj.step === x);
              selections[objIndex].skipTo = parseInt(skipTo) - 1;
              selections[objIndex].backTo = x;
            }
          }
        });

      if (
        $(steps[x]).find("[data-radio-skip]:visible").data("radio-skip") ===
        true
      ) {
        //console.log('skip')
        if (
          textareaLength === 0 &&
          textInputLength === 0 &&
          emailInputLength === 0 &&
          checkboxInputLength === 0
        ) {
          setTimeout(function () {
            next = true;
            nextStep();
            selectionQuiz();
          }, $(steps[x]).find("[data-radio-delay]").data("radio-delay"));
        }
      }
    }
  });

////////////////////////////custom indicator nav
if ($("[data-clickable-all]").data("clickable-all")) {
  $('[data-form="custom-progress-indicator"]').removeClass("disabled");
} else {
  $('[data-form="custom-progress-indicator"]').addClass("disabled");
}
function clickableIndicator() {
  console.log($(this).index());
  $('[data-form="progress-indicator"]').removeClass("current");

  if ($("[data-clickable]").data("clickable")) {
    if ($("[data-clickable]").data("clickable-all")) {
      x = $(this).index();
      updateStep();
    } else {
      if ($(this).index() <= progress) {
        x = $(this).index();
        updateStep();
      }
    }
  }
}
// $('[data-form="progress-indicator"]').on('click', clickableIndicator)
$('[data-form="custom-progress-indicator"]').on("click", clickableIndicator);
/////////////////////

/////debug mode//////////////////
if ($('[data-form="multistep"]').data("debug-mode")) {
  console.log("debug mode");
  //data go to attr
  $("[data-go-to]").each(function () {
    $(this).append("<br>Data Go To = ", $(this).data("go-to"));
  });
  //data answer attr
  $("[data-answer]").each(function () {
    $(this).append("<br>Data Answer = ", $(this).data("answer"));
  });
}
/////////////////////////////

$('[data-form="submit-btn"]').on("click", function (e) {
  e.preventDefault();
  e.stopPropagation();
  //console.log('form is being submitted')

  if ($('[data-form="multistep"]').data("logic-extra")) {
    if (
      curStep === $('[data-form="step"]:not([data-card="true"])').length ||
      $(steps[x]).find('[data-form="submit"]:visible').length > 0
    ) {
      $(this).prop("novalidate", true);
      $(steps).find(":input").prop("required", false);
    }
  }

  //function to remove unanswered card
  if ($('[data-form="multistep"]').data("remove-unfilled")) {
    for (j = 1; j <= selections.length; j++) {
      $(steps[j])
        .find(
          `[data-answer]:not([data-answer="${selections[j - 1].selected}"])`
        )
        .remove();
    }
  }

  localStorage.removeItem("filledInput");
  $(this).parents("form").submit();
});

steps.each(function () {
  $('[data-form="progress"]').append(progressbarClone.clone(true, true));
});
progressbar = $('[data-form="progress"]').children();
$('[data-form="progress-indicator"]').on("click", clickableIndicator);
updateStep();

$("textarea").keypress(function (event) {
  $(this).focus();
  if (event.key == "Enter") {
    event.preventDefault();
    if (fill) {
      $('[data-form="next-btn"]')[0].click();
    }
  }

  if (event.shiftKey && event.key == "Enter") {
    $(this).val($(this).val() + "\n");
  }
});

//if(!$('[data-nav-btn]').data('nav-btn')){$('[data-nav-btn]').remove()}
//if(!$('[data-nav-progress]').data('nav-progress')){$('[data-nav-progress]').remove()}
//if(!$('[data-step-counter]').data('step-counter')){$('[data-step-counter]').remove()}
//if(!$('[data-next-btn]').data('step-counter')){$('[data-next-btn]').remove()}
//if(!$('[data-submit-btn]').data('step-counter')){$('[data-submit-btn]').remove()}
