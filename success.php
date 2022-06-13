<!doctype html>
<html lang="ru">
   <head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="thank-you-page.css">
    <title>Спасибо!</title>
    <!-- Facebook Pixel Code -->
<!--
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '0');
  fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=0&ev=PageView&noscript=1"
/></noscript>
-->
<!-- End Facebook Pixel Code -->
</head>
<body>
    <script>
//  fbq('track', 'Lead');
</script>
    <div class="container">
        <div class="row mt-5">
            <div class="col-12 text-center">
                <h2>Спасибо. Ваш заказ принят!</h2>
            <h4>
                Вы ввели следующие данные:<br/>
            </h4>
            <h4>
                Имя: <?php if(!empty($_GET['name'])) { echo htmlspecialchars($_GET["name"]); } ?><br/>
                Телефон: <?php if(!empty($_GET['phone'])) { echo htmlspecialchars($_GET["phone"]); } ?>
            </h4>

            <h4>Мы позвоним Вам в ближайшие 15 минут. Держите телефон рядом.<br>
                Наш колл центр работает с 09:00 до 22:00</h4>
            </div>
        </div>
    </div>
</body>
</html>

