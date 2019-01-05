$(()=>{
    $('body')
    .append(
        $('<h1 class="text-center h1 my-4">To-Do List</h1>')
    )
    .append(
        $('<div class="container my-4">')
        .append(
            $('<div class="row">')
            .append(
                $('<input type="text" placeholder="Enter New Task Here" class="col mx-2" id="inputtask">')
                .keyup(
                    function(ev){
                        if(ev.keyCode==13){
                            $('#unordli')
                            .append(
                                $('<li class="list-group-item"></li>')
                                .append(
                                    $('<div class="row"></div>')
                                    .append(
                                        $(`<span class="col">${$("#inputtask").val()}</span>`)
                                    )
                                    .append(
                                        $('<button class="mx-2 btn btn-primary col-1">⬆️</button>')
                                        .click(
                                            function(e){
                                                $(e.target.parentElement.parentElement).insertBefore($(e.target.parentElement.parentElement).prev())
                                            }
                                        )
                                    )
                                    .append(
                                        $('<button class="mx-2 btn btn-primary col-1">⬇️</button>')
                                        .click(
                                            function(e){
                                                $(e.target.parentElement.parentElement).insertAfter($(e.target.parentElement.parentElement).next())
                                            }
                                        )
                                    )
                                    .append(
                                        $('<button class="mx-2 btn btn-info col-2">✔️</button>')
                                        .click(
                                           function(e){
                                               if($(e.target).text()=="✔️"){
                                               $(e.target.parentElement.parentElement).removeClass("notchecked").addClass("checked")
                                               $(e.target).removeClass("btn-info").addClass("btn-warning")
                                                $(e.target).text("❌")
                                                return;
                                               }
                                               if($(e.target).text()=="❌"){
                                                $(e.target.parentElement.parentElement).removeClass("checked").addClass("notchecked")
                                                $(e.target).removeClass("btn-warning").addClass("btn-info")
                                                $(e.target).text("✔️")
                                                return;
                                               }
                                           }
                                        )
                                    )
                                    .append(
                                        $('<button class="mx-2 btn btn-danger col-2">Delete</button>')
                                        .click(
                                            function(e){
                                                $(e.target.parentElement.parentElement)
                                                .remove()
                                            }
                                        )
                                    )
                                )
                            )
                            $("#inputtask").val("")
                    }
                }
                
                )
                
            )
            .append(
                $('<button class="btn btn-success col-1 mx-1" id="addbutton">Add Task</button>')
                .click(
                    function(){
                    $('#unordli')
                        .append(
                            $('<li class="list-group-item"></li>')
                            .append(
                                $('<div class="row"></div>')
                                .append(
                                    $(`<span class="col">${$("#inputtask").val()}</span>`)
                                )
                                .append(
                                    $('<button class="mx-2 btn btn-primary col-1">⬆️</button>')
                                    .click(
                                        function(e){
                                            $(e.target.parentElement.parentElement).insertBefore($(e.target.parentElement.parentElement).prev())
                                        }
                                    )
                                )
                                .append(
                                    $('<button class="mx-2 btn btn-primary col-1">⬇️</button>')
                                    .click(
                                        function(e){
                                            $(e.target.parentElement.parentElement).insertAfter($(e.target.parentElement.parentElement).next())
                                        }
                                    )
                                )
                                .append(
                                    $('<button class="mx-2 btn btn-info col-2">✔️</button>')
                                    .click(
                                        function(e){
                                            if($(e.target).text()=="✔️"){
                                            $(e.target.parentElement.parentElement).removeClass("notchecked").addClass("checked")
                                            $(e.target).removeClass("btn-info").addClass("btn-warning")
                                             $(e.target).text("❌")
                                             return;
                                            }
                                            if($(e.target).text()=="❌"){
                                             $(e.target.parentElement.parentElement).removeClass("checked").addClass("notchecked")
                                             $(e.target).removeClass("btn-warning").addClass("btn-info")
                                             $(e.target).text("✔️")
                                             return;
                                            }
                                        }
                                    )
                                )
                                .append(
                                    $('<button class="mx-2 btn btn-danger col-2">Delete</button>')
                                    .click(
                                        function(e){
                                            $(e.target.parentElement.parentElement)
                                            .remove()
                                        }
                                    )
                                )
                            )
                        )
                        $("#inputtask").val("")
                    }
                )
            )
            .append(
                $('<button class="btn btn-success col-1 mx-1" id="sortbutton">Sort</button>')
                .click(
                    function(){
                        let a=$("#unordli>li").filter(".checked")
                        $("#unordli>li").filter(".checked").remove()
                        let b=$("#unordli").append(a)
                    }
                )
            )
            .append(
                $('<button class="btn btn-success col-1 mx-1" id="clearbutton">Clear</button>')
                .click(
                    function(){
                        $('#unordli>li').filter(".checked").remove()
                    }
                )
            )
        )
        .append(
            $('<div class="my-4 container">')
            .append(
                $('<ul class="list-group list-group-flush row" id="unordli">')
            )
        )
    )
})