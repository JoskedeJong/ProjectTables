function popFunction(tableId){
    alert(tableId);
}

$(document).ready(function() {

    var maxTables = 10;

    for (a=0; a<=maxTables; a++){
        var tableListEntry = $(document.createElement("div"));
        $(tableListEntry).attr("id", "tableOf"+a);
        $(tableListEntry).attr("onClick", "popFunction("+a+")");
        $(tableListEntry).text("table of "+a);
        $(tableListEntry).appendTo("#holdsTablesList");
    }
});