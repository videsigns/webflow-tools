  var x = 0
  var steps = $('[data-form="step"]')
  var progressbarClone = $('[data-form="progress"]').children().clone()
  var progressbar;
  var fill = false

  $('[data-form="progress"]').children().remove()
  $('[data-text="totalSteps"]').text($('[data-form="step"]').length)
  $('[data-form="submit-btn"]').hide()

  function disableBtn(){
    fill = false
    //next button style 
    $('[data-form="next-btn"]').css({
      "opacity" : "0.2",
      "pointer-events": "none"
    })
    //submit btn style
    $('[data-form="submit-btn"]').css({
      "opacity" : "0.5",
      "pointer-events": "none"
    })
  }

  function enableBtn(){
    fill = true
    //next button style 
    $('[data-form="next-btn"]').css({
      "opacity" : "1",
      "pointer-events": "auto"
    })
    //submit btn style
    $('[data-form="submit-btn"]').css({
      "opacity" : "1",
      "pointer-events": "auto"
    })
  }

  function updateStep(){
    $(steps[x]).find(':input').trigger('input')    
    $('[data-text="curStep"]').text(x+1)

    steps.hide()
    window.Webflow && window.Webflow.require( 'ix2' ).init();

    $(steps[x]).show()
    $(progressbar[x]).addClass('current')
    document.dispatchEvent(new Event('readystatechange'));

    $($(steps[x]).find('textarea')[0]).focus()
    $($(steps[x]).find('input')[0]).focus()
  }

  function validateEmail(email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if( !emailReg.test( email ) ) {
      disableBtn()
    } else {
      enableBtn()
    }
  }

  function validation(input){
    if($(steps[x]).find(':input').is('[type="checkbox"]')){
      var checkCount = $(steps[x]).data('checkbox') ? $(steps[x]).data('checkbox') : 0

      if(checkCount === '*' || checkCount > $(steps[x]).find(':input[type="checkbox"]').length){
        $(steps[x]).find(':input[type="checkbox"]').each(function(){
          if($(this).is(':checked')){
            enableBtn()
          }else{
            disableBtn()
          }
        })
      }else{
        if($(steps[x]).find(':input[type="checkbox"]:checked').length === checkCount){
          enableBtn()
        }else if(checkCount === 0){
          enableBtn()
        }else{
          disableBtn()
        }
      }
    }else if($(steps[x]).find(':input').is('[type="radio"]')){

      if($(steps[x]).find(':input[type="radio"]').prop('required')){
        if($(steps[x]).find(':input[type="radio"]').is(':checked')){
          enableBtn()
        }else{
          disableBtn()
        }
      }else{
        enableBtn()
      }

    }else{
      $(steps[x]).find(':input').each(function(x){
        if($(this).prop('required')){
          if($(this).val() !== ''){
            if($(this).is('[type="email"]')){
              validateEmail($(this).val())
            }else{
              enableBtn()
            }
          }else{
            disableBtn()
          }
        }else{
          enableBtn()
        }
      })
    }
  }

  function nextStep(){
    if(x <steps.length - 1){
      x++
      updateStep()
    }
    if(x === steps.length - 1){
      $('[data-form="next-btn"]').hide()
      $('[data-form="submit-btn"]').show()
    }
  }

  function backStep(){
    $('[data-form="next-btn"]').show()
    $('[data-form="submit-btn"]').hide()
    if(x > 0 ){
      $(progressbar[x]).removeClass('current')
      x--
      updateStep()
    }
  }

  $('form').on('keypress', function(e){
    if(e.keyCode === 13 && fill){
      if($('[data-enter]').data('enter')){
        $('[data-form="next-btn"]').click()
        if(x === steps.length - 1){
          $('form').submit()
        }else{
          e.preventDefault()
        }
      }else{
        e.preventDefault()
      }
    }
  })

  $('[data-form="next-btn"]').on('click', function(){nextStep()})
  $('[data-form="back-btn"]').on('click', function(){backStep()})
  $(steps).find(':input').on('input', function(input){validation(input)})
  $(steps).find(':radio').on('click', function(){
    if($(steps[x]).find(':input').is(':checked')){
      setTimeout(function(){nextStep()},500)
    }
  })

  steps.each(function(){
    $('[data-form="progress"]').append(progressbarClone.clone());
  })
  progressbar = $('[data-form="progress"]').children()

  //initialize function
  disableBtn()
  updateStep()
