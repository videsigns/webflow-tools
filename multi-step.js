var progressbar,x=0,curStep=0,steps=$('[data-form="step"]'),progressbarClone=$('[data-form="progress-indicator"]').clone(),fill=!1;function disableBtn(){fill=!1,$('[data-form="next-btn"]').css({opacity:"0.2","pointer-events":"none"}),$('[data-form="submit-btn"]').css({opacity:"0.5","pointer-events":"none"})}function enableBtn(){fill=!0,$('[data-form="next-btn"]').css({opacity:"1","pointer-events":"auto"}),$('[data-form="submit-btn"]').css({opacity:"1","pointer-events":"auto"})}function updateStep(){$(steps[x]).data("card")&&enableBtn(),$('[data-form="custom-progress-indicator"]').removeClass("current"),$($('[data-form="custom-progress-indicator"]')[x]).addClass("current"),$(steps[x]).find(":input").trigger("input"),steps.hide(),$(steps[x]).fadeIn("slow"),$(progressbar[x]).addClass("current"),document.dispatchEvent(new Event("readystatechange")),0===x?$('[data-form="back-btn"]').hide():x===steps.length-1?($('[data-form="next-btn"]').hide(),$('[data-form="submit-btn"]').show()):($('[data-form="next-btn"]').show(),$('[data-form="back-btn"]').show(),$('[data-form="submit-btn"]').hide())}function validateEmail(t){/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(t)?enableBtn():disableBtn()}function validation(t){if($(steps[x]).find(":input").is('[type="checkbox"]')){var e=$(steps[x]).data("checkbox")?$(steps[x]).data("checkbox"):0;"*"===e||e>$(steps[x]).find(':input[type="checkbox"]').length?$(steps[x]).find(':input[type="checkbox"]').each((function(){$(this).is(":checked")?enableBtn():disableBtn()})):$(steps[x]).find(':input[type="checkbox"]:checked').length>=e||0===e?enableBtn():disableBtn()}else $(steps[x]).find(":input").is('[type="radio"]')?$(steps[x]).find(':input[type="radio"]').prop("required")?$(steps[x]).find(':input[type="radio"]').is(":checked")?enableBtn():disableBtn():enableBtn():$(steps[x]).find(":input").each((function(t){$(this).prop("required")?""!==$(this).val()?$(this).is('[type="email"]')?validateEmail($(this).val()):enableBtn():disableBtn():enableBtn()}))}function nextStep(){x<steps.length-1&&(x++,updateStep()),$('[data-text="current-step"]').text($(steps[x]).data("card")?curStep+=0:curStep+=1)}function backStep(){x>0&&($(progressbar[x]).removeClass("current"),x--,updateStep()),$('[data-text="current-step"]').text(curStep-=1)}$(progressbarClone).removeClass("current"),$('[data-form="progress"]').children().remove(),$('[data-text="total-steps"]').text($('[data-form="step"]:not([data-card="true"])').length),$('[data-form="submit-btn"]').hide(),$('[data-text="current-step"]').text("0"),$(steps[x]).data("card")?curStep+=0:curStep+=1,steps.hide(),$("body").on("keypress",(function(t){13===t.keyCode&&fill&&(console.log("enter"),$("[data-enter]").data("enter")?($('[data-form="next-btn"]')[0].click(),t.preventDefault()):t.preventDefault())})),$("body").keydown((function(t){(t.metaKey||t.ctrlKey)&&13==t.keyCode&&(x===steps.length-1?$("form").submit():t.preventDefault())})),$('[data-form="next-btn"]').on("click",(function(){nextStep()})),$('[data-form="back-btn"]').on("click",(function(){backStep()})),$(steps).find(":input").on("input",(function(t){validation(t)})),$(steps).find(":radio").on("click",(function(){$(steps[x]).find(":input").is(":checked")&&!0===$(steps[x]).find("[data-radio-skip]").data("radio-skip")&&setTimeout((function(){nextStep()}),$(steps[x]).find("[data-radio-delay]").data("radio-delay"))})),steps.each((function(){$('[data-form="progress"]').append(progressbarClone.clone())})),progressbar=$('[data-form="progress"]').children(),disableBtn(),updateStep();
