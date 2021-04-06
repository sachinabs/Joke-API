function urlFinder()
{
    let checkUrl = window.location.href;
    console.log(checkUrl);
    let post = checkUrl.split("=");
    let postNumber=post[1];
    console.log(postNumber);
    fetch("assets/json/punch.json")
            .then(function (response)
            {
                return response.json();
            })
            .then(function (data)
            {
                var data_filter = data.filter( element => element.id ==postNumber)
                console.log(data_filter);
                // console.log();
                line=data_filter[0].punchline;
                let text = document.getElementById("SetUp");       
                text.innerHTML = data_filter[0].setup;  
                console.log("Type is "+ data_filter[0].type);

            });            


}

function punchLine()
    {
        let joke = document.getElementById("punch");
        joke.innerHTML = line;
        
    }

function BringMeMore()
{
    window.open("https://sachinabs.github.io/testJokes/","_self");
}