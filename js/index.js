



var calc = document.getElementById('calc_slider');
noUiSlider.create(calc, {
    start: 50000,
	step: 1,
    connect: [true, false],
    range: {
        'min': 200000,
        'max': 10000000
    }
});

var calc2 = document.getElementById('calc_slider2');
noUiSlider.create(calc2, {
    start: 20000,
	step: 1,
    connect: [true, false],
    range: {
        'min': 20000,
        'max': 10000000
    }
});


var calc3 = document.getElementById('calc_slider3');

noUiSlider.create(calc3, {
    start: 1,
	step: 1,
    connect: [true, false],
    range: {
        'min': 5,
        'max': 20
    }
});

var calc4 = document.getElementById('calc_slider4');
noUiSlider.create(calc4, {
    start: 2.7,
	step: 0.1,
    connect: [true, false],
    range: {
        'min': 0.1,
        'max': 12.0
    }
});





calc.noUiSlider.on('update', function () {
	val = calc.noUiSlider.get();
	val=Math.round(val); 
	$('#calc .calcinp1').val((val).toLocaleString('ru'));
	// $('.calc-item-inp').val(val);
    
    
    //какой процент составляет первоначальный вазнос от всей суммы  
    firstDepIn = Number($('.calcinp2').val().replace(/[^0-9]/gi, ''));
    firstPrice = Number($('.calcinp1').val().replace(/[^0-9]/gi, ''));   
    firstDepInPercent = Math.round(firstDepIn/firstPrice*100);    
    $('.firstDep').text(firstDepInPercent);
    
    //устанавливаем макс значение для суммы первоначального взноса не более суммы кредита и мин значение не менее 10% от всей суммы кредита
    min = firstPrice*10/100;
    calc2.noUiSlider.updateOptions({
        range: {
            'min': min,
            'max': firstPrice
        }
    });


    
    //какую сумму нужно будет выплатить
    credit = firstPrice - firstDepIn;
    $('.creditSumVal').text(credit);

    
    // ежемесячный платёж (Сумма кредита + (количество лет * процентная ставка)) / (количество лет * 12) = ежемесячный платёж
    years = Number($('.calcinp3').val().replace(/[^0-9]/gi, ''));
    percent = Number($('.calcinp4').val().replace(/[^0-9.]/gi, ''));

    mounthPay = Math.round((credit + (credit*years*percent/100))/(years*12));
    $('.mounthPay').text(mounthPay);
    
});

calc2.noUiSlider.on('update', function () {
	val = calc2.noUiSlider.get();
	val=Math.round(val);
	$('#calc .calcinp2').val((val).toLocaleString('ru'));
    
    //какой процент составляет первоначальный вазнос от всей суммы  
    firstDepIn = Number($('.calcinp2').val().replace(/[^0-9]/gi, ''));
    firstPrice = Number($('.calcinp1').val().replace(/[^0-9]/gi, ''));    
    firstDepInPercent = Math.round(firstDepIn/firstPrice*100);    
    $('.firstDep').text(firstDepInPercent);
    
    
    //какую сумму нужно будет выплатить
    credit = firstPrice - firstDepIn;
    $('.creditSumVal').text(credit);
    
    // ежемесячный платёж (Сумма кредита + (количество лет * процентная ставка)) / (количество лет * 12) = ежемесячный платёж
    years = Number($('.calcinp3').val().replace(/[^0-9]/gi, ''));
    percent = Number($('.calcinp4').val().replace(/[^0-9.]/gi, ''));

    mounthPay = Math.round((credit + (credit*years*percent/100))/(years*12));
    $('.mounthPay').text(mounthPay);

});

calc3.noUiSlider.on('update', function () {
	val = calc3.noUiSlider.get();
	val=Math.round(val);
	$('#calc .calcinp3').val((val).toLocaleString('ru'));
	 $('.calcinp3').val(val);
    
    // ежемесячный платёж (Сумма кредита + (количество лет * процентная ставка)) / (количество лет * 12) = ежемесячный платёж
    years = Number($('.calcinp3').val().replace(/[^0-9]/gi, ''));
    percent = Number($('.calcinp4').val().replace(/[^0-9.]/gi, ''));

    mounthPay = Math.round((credit + (credit*years*percent/100))/(years*12));
    $('.mounthPay').text(mounthPay);
});

calc4.noUiSlider.on('update', function () {
	val = calc4.noUiSlider.get();
//	val=Math.round(val);
	$('#calc .calcinp4').val((val).toLocaleString('ru'));
//    console.log((val).toLocaleString('ru'));
	 $('.calcinp4').val(val);
	//sum();
    // ежемесячный платёж (Сумма кредита + (количество лет * процентная ставка)) / (количество лет * 12) = ежемесячный платёж
    years = Number($('.calcinp3').val().replace(/[^0-9]/gi, ''));
    percent = Number($('.calcinp4').val().replace(/[^0-9.]/gi, ''));

    mounthPay = Math.round((credit + (credit*years*percent/100))/(years*12));
    $('.mounthPay').text(mounthPay);
});



$('#calc .calcinp1').focusout(function(){
	thisValue = $(this).val($(this).val().replace(/[^0-9]/gi, ''));
	thisValue = $(this).val();
    
    if(thisValue.length > 1) {
    	calc.noUiSlider.set($.trim(thisValue));
    }
});

$('#calc .calcinp2').focusout(function(){
	thisValue = $(this).val($(this).val().replace(/[^0-9]/gi, ''));
	thisValue = $(this).val();
    
    if(thisValue.length > 1) {
    	calc2.noUiSlider.set($.trim(thisValue));
    }
});

$('#calc .calcinp3').focusout(function(){
	thisValue = $(this).val($(this).val().replace(/[^0-9]/gi, ''));
	thisValue = $(this).val();
    
    if(thisValue.length > 1) {
    	calc3.noUiSlider.set($.trim(thisValue));
    }
});
    
$('#calc .calcinp4').focusout(function(){
    thisValue = $(this).val($(this).val().replace(/[^0-9.]/gi, ''));
    thisValue = $(this).val();
    if(thisValue.length > 1) {
    calc4.noUiSlider.set($.trim(thisValue));
    }
});




$( document ).ready(function() {
    firstDepIn = Number($('.calcinp2').val().replace(/[^0-9]/gi, ''));
    firstPrice = Number($('.calcinp1').val().replace(/[^0-9]/gi, ''));  
    //какую сумму нужно будет выплатить
    credit = firstPrice - firstDepIn;
    $('.creditSumVal').text(credit);


    // ежемесячный платёж (Сумма кредита + (количество лет * процентная ставка)) / (количество лет * 12) = ежемесячный платёж
    years = Number($('.calcinp3').val().replace(/[^0-9]/gi, ''));
    percent = Number($('.calcinp4').val().replace(/[^0-9.]/gi, ''));

    mounthPay = Math.round((credit + (credit*years*percent/100))/(years*12));
    $('.mounthPay').text(mounthPay);
    console.log(mounthPay);
    
	var show = true;
    var countbox = ".indic";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.indic-item-number span').css('opacity', '1');
            $('.indic-item-number span').spincrement({
                thousandSeparator: " ",
                duration: 2000
            });

            show = false;
        }
    });
});
