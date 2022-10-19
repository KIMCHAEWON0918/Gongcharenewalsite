$("#birth").datepicker({
    changeMonth:true,      // 월 선택
    changeYear:true,       // 연도 선택
    yearRange:'1900:2022',  // 연도 범위
    showAnim:'slideDown',
    showOtherMonths: true,
    selectOtherMonths: true,
    dateFormat:'yy-mm-dd',
    monthNames:['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    dayNames : ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
    yearSuffix:'년',
    showMonthAfterYear: true
});


var dateFormat = "yy-mm-dd"  
var from = $( "#from" )
        .datepicker({
          defaultDate: "+1w",
          changeMonth: true,
          numberOfMonths: 2,
          dateFormat:'yy-mm-dd',
    monthNames:['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    dayNames : ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
    yearSuffix:'년',
    showMonthAfterYear: true
        })
        .on( "change", function() {
          to.datepicker( "option", "minDate", getDate( this ) );
        })
var to = $( "#to" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 2,
        dateFormat:'yy-mm-dd',
    monthNames:['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    dayNames : ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
    yearSuffix:'년',
    showMonthAfterYear: true
      })
      .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
      });
 
    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }
 
      return date;
    }

    $('#form1').on('submit', function(){
        let idbox = $('.joinBox #idbox').val()
        if (!idbox) {
            alert('아이디를 입력하세요!')
            $('.joinBox #idbox').focus().css({
                borderColor:'#f00'
            })
            return false
        }

        let pwboxCheck = /^[A-Z](?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        // ?= : 조건확인후 처음으로 돌아감
        // ^ : 첫문자 일치, $ : 끝문자 일치
        // + : 한번 이상 나올 수 있음
        // * : 0번 이상 나올 수 있음(한번도 안나올 수 있음)
        // . : 임의의 문자(숫자, 문자, 특수문자 포함한)
        let pwbox = $('.joinBox #pwbox').val()
        if (!pwbox) {
            alert('비밀번호를 입력하세요!')
            $('.joinBox #pwbox').focus().css({
                borderColor:'#f00'
            })
            return false
        } else if ( !pwboxCheck.test(pwbox) ) {
            alert('비밀번호 규칙에 맞지 않습니다.')
            $('.joinBox #pwbox').focus().css({
                borderColor:'#f00'
            }).val('')
            return false
        }

        let pwboxok = $('.joinBox #pwboxok').val()
        if (pwbox!==pwboxok) {
            alert('비밀번호를 정확히 입력하세요.')
            $('.joinBox #pwbox').focus().css({
                borderColor:'#f00'
            }).val('')
            $('.joinBox #pwboxok').val('')
            return false
        }


    })


    $('#domainlist').on('change', function(){
        let opt = $(this).find('option:selected').val()
        if (opt !== 'noselect' && opt !== 'self') {
            $('#emaildomain').val(opt).attr({
                disabled:true
            })
        } else if (opt==='self') {
            $('#emaildomain').val('').attr({
                disabled:false
            }).focus()
        } else {
            $('#emaildomain').val('').attr({
                disabled:true
            })
        }
    })


    $('#all').on('click', function(){
        let check = $(this).prop('checked')
        // console.log(check)
        $('input[id^="co"]').prop('checked', check)
    })

    $('#memo').on('keydown', function(){
        let currentText = $(this).val().length
        let maxlen = 10
        let remainText = maxlen - currentText
        $(this).next().text(remainText)
    })