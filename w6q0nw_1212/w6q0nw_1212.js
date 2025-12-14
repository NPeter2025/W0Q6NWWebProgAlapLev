$(document).ready(function()
{
    $("#load_data").click(function()
    {
        $('#area').html("");

        $('#area').append("<h2>TOKAJ HEGYALJA EGYETEM </h>");

        $.getJSON('orarendNT.json',function(data)
    
        {
                    $('#area').append("<b>Cím: </b>");
                    $('#area').append("&nbsp;", + data.W6Q0NW_orarend.cim["iranyitoszam"]);
                    $('#area').append("&nbsp;", + data.W6Q0NW_orarend.cim["varos"]);
                    $('#area').append("&nbsp;", + data.W6Q0NW_orarend.cim["utca"] +
                    "<br><br>");

                    $('#area').append("<b>Telefonszam: </b> <ul>");

                    for(let i =0;i<data.U00WXY_orarend["telefonszam"].length;i++)
                    {
                        $('#area').append("<li>" + data.W6Q0NW_orarend["telefonszam"][i].tipus + ":&nbsp;" +data.W6Q0NW_orarend["telefonszam"][i].szam +"</li>");
                
                    }

                    $('#area').append("<ul><br><b>THE, PTI órarend 2025 ősz  </b><br><br> ");

                    
                for(let i =0;i<data.W6Q0NW_orarend.ora.length;i++)
                    {
                        $('#area').append("<b>Tárgy:</b>&nbsp;" +data.W6Q0NW_orarend.ora[i].targy +"<br><br>");
                
                            $("#area").append("<b>Időpont:</b><br>&nbsp;Nap:&nbsp;"+data.
                                W6Q0NW_orarend.ora[i].idopont.nap +"<br>&nbsp;Tól:&nbsp;"+data.
                                W6Q0NW_orarend.ora[i].idopont.ig +"<br>&nbsp;Ig:&nbsp;"
                            )

                         $('#area').append("<b>Helyszín:</b>&nbsp;" +data.W6Q0NW_orarend.ora[i].helyszin +"<br><br>");

                          $('#area').append("<b>Oktató:</b>&nbsp;" +data.W6Q0NW_orarend.ora[i].oktato +"<br><br>");

                           $('#area').append("<b>Tárgy:</b>&nbsp;" +data.W6Q0NW_orarend.ora[i].szak +"<br><br>");
                    }
               
                    $('#area').append

        }
    )
    }

    )
}

)