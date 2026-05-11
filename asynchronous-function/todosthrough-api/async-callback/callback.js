        let value1  ;
        let value2 ;
        let value3 ;
        setTimeout(()=>{
            value1 = "30";
            value2 = "40";
            value3 = "50";
            document.getElementById('display1').textContent = value1;
            document.getElementById('display2').textContent = value2;
            document.getElementById('display3').textContent = value3;
            alert("Values have been updated after 6 seconds");

        },6000);
        function getvalue1(){
            document.getElementById('display1').textContent = value1;
            console.log(value1);
        }
        function getvalue2(){
            document.getElementById('display2').textContent = value2;
            console.log(value2);
        }
        function getvalue3(){
            document.getElementById('display3').textContent = value3;
            console.log(value3);
        }
    getvalue1();
    getvalue2();
    getvalue3();