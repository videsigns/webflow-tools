//22-11-22 
//Bug fixes

var progressbar,
  x = 0,
  curStep = 0,
  steps = $('[data-form="step"]'),
  progressbarClone = $('[data-form="progress-indicator"]').clone(),
  fill = !1,
  inputFilled = !0,
  selectFilled = !0,
  radioFilled = !0,
  checkboxFilled = !0,
  emailFilled = !0,
  textareaFilled = !0,
  answer = "",
  selections = [],
  selection = [],
  empReqInput = [],
  empReqSelect = [],
  empReqTextarea = [],
  reinitIX = $("[data-reinit]").data("reinit"),
  textareaLength = 0,
  textInputLength = 0,
  emailInputLength = 0,
  selectInputLength = 0,
  checkboxInputLength = 0,
  filledInput = [],
  savedFilledInput = JSON.parse(localStorage.getItem("filledInput")),
  memory = $("[data-memory]").data("memory"),
  quiz = $("[data-quiz]").data("quiz");
function disableBtn() {
  (fill = !1),
    $('[data-form="next-btn"]').css({
      opacity: "0.2",
      "pointer-events": "none",
    }),
    $('[data-form="submit-btn"]').css({
      opacity: "0.5",
      "pointer-events": "none",
    });
}
function enableBtn() {
  (fill = !0),
    $('[data-form="next-btn"]').css({ opacity: "1", "pointer-events": "auto" }),
    $('[data-form="submit-btn"]').css({
      opacity: "1",
      "pointer-events": "auto",
    });
}
function saveFilledInput() {
  $('form[data-form="multistep"] :input')
    .not('[type="submit"]')
    .each(function () {
      "checkbox" === $(this).attr("type") || "radio" === $(this).attr("type")
        ? $(this).prop("checked") &&
          (filledInput.some((e) => e.inputName === $(this).attr("name"))
            ? (filledInput = filledInput.filter(
                (e) => e.inputName !== $(this).attr("name")
              )).push({ inputName: $(this).attr("name"), value: $(this).val() })
            : filledInput.push({
                inputName: $(this).attr("name"),
                value: $(this).val(),
              }))
        : filledInput.some((e) => e.inputName === $(this).attr("name"))
        ? (filledInput = filledInput.filter(
            (e) => e.inputName !== $(this).attr("name")
          )).push({ inputName: $(this).attr("name"), value: $(this).val() })
        : filledInput.push({
            inputName: $(this).attr("name"),
            value: $(this).val(),
          });
    }),
    localStorage.removeItem("filledInput"),
    localStorage.setItem("filledInput", JSON.stringify(filledInput)),
    console.log(savedFilledInput);
}
function updateStep() {
  (inputFilled = !0),
    (radioFilled = !0),
    (checkboxFilled = !0),
    (selectFilled = !0),
    (textareaFilled = !0),
    (emailFilled = !0),
    $('[data-form="custom-progress-indicator"]').removeClass("current"),
    $($('[data-form="custom-progress-indicator"]')[x]).addClass("current"),
    (selection = selections.filter((e) => e.step === x - 1)),
    $("[data-answer]").hide(),
    steps.hide(),
    !0 === reinitIX && window.Webflow.destroy(),
    $(progressbar[x]).addClass("current"),
    !0 === reinitIX
      ? (window.Webflow && window.Webflow.require("ix2").init(),
        document.dispatchEvent(new Event("readystatechange")),
        $(steps[x]).show())
      : $(steps[x]).fadeIn("slow"),
    selection.length > 0
      ? $(steps[x]).find(`[data-answer="${selection[0].selected}"]`).show()
      : ($(steps[x]).find(`[data-answer="${answer}"]`).show(),
        console.log(
          $(steps[x]).find(`[data-answer="${answer}"]`).find(":input")
        )),
    0 === x
      ? ($('[data-form="back-btn"]').hide(), $('[data-form="next-btn"]').show())
      : x === steps.length - 1 ||
        $(steps[x]).find('[data-form="submit"]:visible').length > 0
      ? ($('[data-form="next-btn"]').hide(),
        $('[data-form="submit-btn"]').show(),
        $('[data-form="back-btn"]').show())
      : ($('[data-form="next-btn"]').show(),
        $('[data-form="back-btn"]').show(),
        $('[data-form="submit-btn"]').hide()),
    $($(steps[x]).find("input[autofocus]")[0]).focus(),
    $($(steps[x]).find("textarea[autofocus]")[0]).focus(),
    $(steps[x]).find(":input").trigger("input"),
    validation();
}
function validateEmail(e) {
  console.log("email", e),
    (emailFilled = !!/^([\w-\.]+@([\w-]+\.)+[\w-]{2,20})?$/.test(e));
}
function validation(e) {
  $(steps[x]).data("card") && enableBtn(),
    (textareaLength = $(steps[x]).find("textarea[required]:visible").length),
    (textInputLength = $(steps[x]).find(
      'input[type="text"][required]:visible'
    ).length),
    (selectInputLength = $(steps[x]).find("select[required]:visible").length),
    (emailInputLength = $(steps[x]).find('input[type="email"]:visible').length),
    (checkboxInputLength = $(steps[x]).find(
      'input[type="checkbox"]:visible'
    ).length),
    textInputLength > 0 || selectInputLength > 0 || textareaLength > 0
      ? disableBtn()
      : enableBtn();
  var t = $(steps[x]).data("checkbox") ? $(steps[x]).data("checkbox") : 0;
  $("[data-logic-extra]").data("logic-extra")
    ? ($(steps[x]).data("card") &&
        ((answer = $(steps[x]).find("[data-go-to]").data("go-to")),
        (selections = selections.filter((e) => e.step !== x)).push({
          step: x,
          selected: answer,
        })),
      $(steps[x])
        .find("[data-answer]:visible")
        .find(":input")
        .is('[type="checkbox"]') &&
        ("*" === t || t > $(steps[x]).find(':input[type="checkbox"]').length
          ? $(steps[x])
              .find(':input[type="checkbox"]')
              .each(function () {
                $(this).is(":checked")
                  ? $(steps[x]).find(":input[required]").length < 1 &&
                    ((answer = $(this)
                      .parents("[data-go-to]")
                      .attr("data-go-to")),
                    (selections = selections.filter((e) => e.step !== x)).push({
                      step: x,
                      selected: answer,
                    }),
                    (checkboxFilled = !0))
                  : (checkboxFilled = !1);
              })
          : $(steps[x])
              .find("[data-answer]:visible")
              .find(':input[type="checkbox"]:checked').length >= t
          ? (console.log($(steps[x]).find(":input[required]").length),
            $(steps[x]).find(":input[required]").length < 1 &&
              ((answer = $(steps[x])
                .find("[data-answer]:visible")
                .find(':input[type="checkbox"]:checked')
                .parents("[data-go-to]")
                .attr("data-go-to")),
              (selections = selections.filter((e) => e.step !== x)).push({
                step: x,
                selected: answer,
              }),
              (checkboxFilled = !0)))
          : (checkboxFilled = !1)),
      $(steps[x])
        .find("[data-answer]:visible")
        .find(":input[required]")
        .is('[type="radio"]') &&
        (radioFilled = !!$(steps[x])
          .find(':input[type="radio"]')
          .is(":checked")),
      $(steps[x])
        .find("[data-answer]:visible")
        .find(':input[type="text"][required]')
        .each(function (e) {
          "" !== $(this).val()
            ? ((answer = $(this).parents("[data-go-to]").attr("data-go-to")),
              (selections = selections.filter((e) => e.step !== x)).push({
                step: x,
                selected: answer,
              }),
              console.log(answer, x),
              (empReqInput = empReqInput.filter((t) => t.input !== e)))
            : empReqInput.find((t) => t.input === e) ||
              empReqInput.push({ input: e }),
            (inputFilled = 0 === empReqInput.length);
        }),
      $(steps[x])
        .find("[data-answer]:visible")
        .find("select[required]")
        .each(function (e) {
          "" !== $(this).val()
            ? ((answer = $(this).parents("[data-go-to]").attr("data-go-to")),
              (selections = selections.filter((e) => e.step !== x)).push({
                step: x,
                selected: answer,
              }),
              (empReqSelect = empReqSelect.filter((t) => t.input !== e)))
            : empReqSelect.find((t) => t.input === e) ||
              empReqSelect.push({ input: e }),
            (selectFilled = 0 === empReqSelect.length);
        }),
      $(steps[x])
        .find("[data-answer]:visible")
        .find("textarea[required]")
        .each(function (e) {
          "" !== $(this).val()
            ? ((answer = $$(this).parents("[data-go-to]").attr("data-go-to")),
              (selections = selections.filter((e) => e.step !== x)).push({
                step: x,
                selected: answer,
              }),
              (empReqTextarea = empReqTextarea.filter((t) => t.input !== e)))
            : empReqTextarea.find((t) => t.input === e) ||
              empReqTextarea.push({ input: e }),
            (textareaFilled = 0 === empReqTextarea.length);
        }),
      $(steps[x])
        .find("[data-answer]:visible")
        .find(':input[type="email"][required]')
        .each(function (e) {
          "" !== $(this).val()
            ? ((answer = $(this).parents("[data-go-to]").attr("data-go-to")),
              (selections = selections.filter((e) => e.step !== x)).push({
                step: x,
                selected: answer,
              }),
              validateEmail($(this).val()))
            : (emailFilled = !1);
        }))
    : ($(steps[x]).find(":input").is('[type="checkbox"]') &&
        ("*" === t || t > $(steps[x]).find(':input[type="checkbox"]').length
          ? $(steps[x])
              .find(':input[type="checkbox"]')
              .each(function () {
                $(this).is(":checked")
                  ? $(steps[x]).find(":input[required]").length < 1 &&
                    (checkboxFilled = !0)
                  : (checkboxFilled = !1);
              })
          : (checkboxFilled =
              $(steps[x]).find(':input[type="checkbox"]:checked').length >= t)),
      $(steps[x]).find(":input[required]").is('[type="radio"]') &&
        (radioFilled = !!$(steps[x])
          .find(':input[type="radio"]')
          .is(":checked")),
      $(steps[x])
        .find(':input[type="text"][required]')
        .each(function (e) {
          "" !== $(this).val()
            ? (empReqInput = empReqInput.filter((t) => t.input !== e))
            : empReqInput.find((t) => t.input === e) ||
              empReqInput.push({ input: e }),
            (inputFilled = 0 === empReqInput.length);
        }),
      $(steps[x])
        .find("select[required]")
        .each(function (e) {
          "" !== $(this).val()
            ? (empReqSelect = empReqSelect.filter((t) => t.input !== e))
            : empReqSelect.find((t) => t.input === e) ||
              empReqSelect.push({ input: e }),
            (selectFilled = 0 === empReqSelect.length);
        }),
      $(steps[x])
        .find("textarea[required]")
        .each(function (e) {
          "" !== $(this).val()
            ? (empReqTextarea = empReqTextarea.filter((t) => t.input !== e))
            : empReqTextarea.find((t) => t.input === e) ||
              empReqTextarea.push({ input: e }),
            (textareaFilled = 0 === empReqTextarea.length);
        }),
      $(steps[x])
        .find(':input[type="email"][required]')
        .each(function () {
          "" !== $(this).val()
            ? validateEmail($(this).val())
            : (emailFilled = !1);
        })),
    inputFilled &&
    checkboxFilled &&
    radioFilled &&
    emailFilled &&
    selectFilled &&
    textareaFilled
      ? enableBtn()
      : disableBtn();
}
function nextStep() {
  ++x <= steps.length - 1 &&
    (console.log(x, steps.length - 1),
    updateStep(),
    memory && saveFilledInput(),
    $('[data-text="current-step"]').text(
      $(steps[x]).data("card") ? (curStep += 0) : (curStep += 1)
    ));
}
function backStep() {
  x > 0 && ($(progressbar[x]).removeClass("current"), x--, updateStep()),
    $('[data-text="current-step"]').text((curStep -= 1));
}
$(progressbarClone).removeClass("current"),
  $('[data-form="progress"]').children().remove(),
  $('[data-text="total-steps"]').text(
    $('[data-form="step"]:not([data-card="true"])').length
  ),
  $('[data-form="submit-btn"]').hide(),
  $(steps[x]).data("card") ? (curStep += 0) : (curStep += 1),
  $('[data-text="current-step"]').text(curStep),
  steps.hide(),
  savedFilledInput &&
    memory &&
    savedFilledInput.forEach((e) => {
      "radio" ===
      $(`input[name="${e.inputName}"][value="${e.value}"]`).attr("type")
        ? ($(`input[name="${e.inputName}"][value="${e.value}"]`).click(),
          $(`input[name="${e.inputName}"][value="${e.value}"]`)
            .siblings(".w-radio-input")
            .addClass("w--redirected-checked"))
        : "on" === e.value
        ? ($(`input[name="${e.inputName}"]`).click(),
          $(`input[name="${e.inputName}"]`)
            .siblings(".w-checkbox-input")
            .addClass("w--redirected-checked"))
        : $(`input[name="${e.inputName}"]`).val(e.value);
    }),
  quiz &&
    steps.each(function () {
      $(this).children().attr("data-radio-skip", !0),
        $(this).children().attr("data-radio-delay", 250);
    }),
  $("body").on("keypress", function (e) {
    13 === e.keyCode &&
      fill &&
      (console.log("enter"),
      $("[data-enter]").data("enter")
        ? ($('[data-form="next-btn"]')[0].click(),
          e.preventDefault(),
          e.stopPropagation())
        : (e.preventDefault(), e.stopPropagation()));
  }),
  $("body").keydown(function (e) {
    (e.metaKey || e.ctrlKey) &&
      13 == e.keyCode &&
      (console.log(x, steps.length - 1),
      x >= steps.length - 1
        ? $('[data-form="submit-btn"]').click()
        : (console.log("not submitting"),
          e.preventDefault(),
          e.stopPropagation()));
  }),
  $('[data-form="next-btn"]').on("click", function () {
    nextStep(), $(steps[x]).find(":input").trigger("input");
  }),
  $('[data-form="back-btn"]').on("click", function () {
    backStep();
  }),
  $(steps)
    .find(":input")
    .on("input", function (e) {
      validation(e);
    }),
  $(steps)
    .find(":radio")
    .on("click", function () {
      $(steps[x]).find(":input").is(":checked") &&
        ((answer = $(steps[x])
          .find("input[type='radio']:checked")
          .attr("data-go-to")),
        (selections = selections.filter((e) => e.step !== x)).push({
          step: x,
          selected: answer,
        }),
        !0 === $(steps[x]).find("[data-radio-skip]").data("radio-skip") &&
          (console.log("skip"),
          0 === textareaLength &&
            0 === textInputLength &&
            0 === emailInputLength &&
            0 === checkboxInputLength &&
            setTimeout(function () {
              nextStep();
            }, $(steps[x]).find("[data-radio-delay]").data("radio-delay"))));
    }),
  $('[data-form="submit-btn"]').on("click", function (e) {
    e.preventDefault(),
      e.stopPropagation(),
      console.log("form is being submitted"),
      $("[data-logic-extra]").data("logic-extra") &&
        (curStep === $('[data-form="step"]:not([data-card="true"])').length ||
          $(steps[x]).find('[data-form="submit"]:visible').length > 0) &&
        ($(this).prop("novalidate", !0),
        $(steps).find(":input").prop("required", !1)),
      localStorage.removeItem("filledInput"),
      $(this).parents("form").submit();
  }),
  steps.each(function () {
    $('[data-form="progress"]').append(progressbarClone.clone());
  }),
  (progressbar = $('[data-form="progress"]').children()),
  updateStep();
