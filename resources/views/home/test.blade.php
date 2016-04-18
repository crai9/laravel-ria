<html>
<head>
    <title>Test</title>
</head>
<body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.4.5/socket.io.min.js"></script>
<script>
    var socket = io('http://192.168.10.10:3000');

    socket.on('test-channel:Notification', function(data){
        console.log(data);
    });
</script>
</body>
</html>