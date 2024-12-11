---

layout: page

title: GeorgeGuessr [WIP]

---







<html>

<head>

    <title>Temporary Image Display</title>

</head>

<body>

    <input type="file" id="fileInput">



    <script>

    	document.addEventListener("DOMContentLoaded", function() {

    // Ensures the DOM is fully loaded before attaching the event listener

    var fileInput = document.getElementById('fileInput');

    

    fileInput.addEventListener('change', handleFileSelect);



    function handleFileSelect(evt) {

        const file = evt.target.files[0];

        const reader = new FileReader();



        reader.onload = function(e) {

            const img = document.createElement("img");

            img.src = e.target.result;

            img.id = "tempImage";

            document.body.appendChild(img);



            setTimeout(() => {

                document.body.removeChild(img);

            }, 500); // Display for 0.5 seconds

        };



        reader.readAsDataURL(file);

    }

});



    </script>

</body>

</html>

