        // Callback function example 1
        let value1 = "This is value 1"; ;
        let value2 = "This is value 2"; ;
        let value3 = "This is value 3"; ;
        setTimeout(()=>{
            value1 = "30";
            value2 = "40";
            value3 = "50";
            document.getElementById('display1').textContent = value1;
            document.getElementById('display2').textContent = value2;
            document.getElementById('display3').textContent = value3;
            alert("Values have been updated after 2 seconds");

        },2000);
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

    // Callback function example 2
    function fetchData(callback){
        setTimeout(()=>{
            const data = "Data fetched successfully!";
            callback(data);
        },3000);
    }
    function displayData(data){
        console.log(data);
        document.getElementById('dataDisplay').textContent = data;
        
    }
    fetchData(displayData);