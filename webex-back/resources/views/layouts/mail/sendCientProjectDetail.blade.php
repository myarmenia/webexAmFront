<!DOCTYPE html>
<html>
<head>
    <title>Клиент проект детали</title>
</head>
<body>
   <p>Имя: {{$data['name']}} </p>
   <p>Телефон: {{$data['phone']}} </p>
   <p>Маил: {{$data['email']}} </p>
    @if($data['domain'] )
        <p>Сайт: {{$data['domain']}} </p>
    @endif
    @if($data['comment'] )
        <p>Коментария: {{$data['comment']}} </p>
    @endif
    @if($data['projectType'] )
        <p>Проект: {{$data['projectType']}} </p>
    @endif
</body>
</html>