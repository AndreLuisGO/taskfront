$(document).ready(function(){
	
	
	var $tarefas = $('#tarefas');
	var $nome = $('#nome');
	var concluida;
	var conc;
	var editconcluida;
	var templateTarefa = $('#template-tarefa').html();
	var templateEdit = $('#templateEdit').html();
	var $nomedit = $('editnome');

	$('#check').change(function(){
		concluida = this.checked;
		console.log(concluida);
	});

	// $('.conc_edit').change(function(){
	// 	conc = this.checked;
	// 	console.log(conc);
	// });

	$('.conclui').change(function(){
		editconcluida = this.checked;
		console.log(editconcluida);
	});

	function appendTarefa(tarefa){
		$tarefas.append(Mustache.render(templateTarefa, tarefa));
	}

	function editaTarefa(tarefa){
		$tarefas.append(Mustache.render(templateEdit, tarefa));
	}

//GET
	$.ajax({
		type:'GET',
		url: 'http://127.0.0.1:8000/tarefas/?format=json',
		success: function(tarefas) {
			$.each(tarefas, function(i, tarefa){
				appendTarefa(tarefa);
			});
		},
		error: function(){
			alert:('Erro ao carregar tarefas');
		}
	});


//POST
	$('#add-tarefa').on('click', function(){

		$.ajax({
			url: 'http://127.0.0.1:8000/tarefas/',
			type: 'POST',
			data: {
			nome: $nome.val(),
			concluida: concluida,
		},
			success: function(novaTarefa){
				appendTarefa(novaTarefa);
			},
			error: function(){
				alert('Erro ao salvar tarefa!');
			}
		});
	});

//DELETE
	$tarefas.delegate('.remove-tarefa','click', function(){
		var $tr = $(this).closest('tr');
		$.ajax({
			type:'DELETE',
			url: 'http://127.0.0.1:8000/tarefas/'+$tr.attr('data-id')+'/',
			success: function(){
				$tr.fadeOut(500, function(){
				$(this).remove();					
				});
			}
		});
	});


//PUT
	$tarefas.delegate('.edita-tarefa','click', function(){
		var $tr = $(this).closest('tr');
		$.ajax({
			url: 'http://127.0.0.1:8000/tarefas/'+$tr.attr('data-id')+'/',
			type: 'GET',
			success: function(edTarefa){
				editaTarefa(edTarefa);
				console.log('editatarefa funciona'+ $tr.attr('data-id')+'/');
			},
			error: function(){
				alert('Erro ao editar tarefa!');
			}
		});
	});

	$tarefas.delegate('.salvaedit', 'click', function(){
		console.log('salvaedit funciona');		
		var $tr = $(this).closest('tr');
		var tarefa = {
			nome: $('input.editnome').val(),
			concluida: $('input#conclui').is(":checked"),
		};
		console.log(tarefa);

		$.ajax({
			url: 'http://127.0.0.1:8000/tarefas/'+ $(this).attr('data-id')+'/',
			type: 'PUT',
			data: tarefa,
			success: function(novaTarefa){
				appendTarefa(novaTarefa);
				window.location.reload(true); 
			},
			error: function(){
				alert('Erro ao atualizar tarefa!');
			}
		});

	 })


	$tarefas.delegate('.conc_edit', 'click', function(){
		console.log('conc_edit funciona');
		var $tr = $(this).closest('tr');
		
		var tarefa = {
			nome: $tr.find('input.concluispan').val(),
			concluida: $tr.find('input.conc_edit').is(":checked"),
                       
		};
		console.log(tarefa);

		$.ajax({
			url: 'http://127.0.0.1:8000/tarefas/'+ $tr.attr('data-id')+'/',
			type: 'PUT',
			data: tarefa,
			success: function(novaTarefa){
				appendTarefa(novaTarefa);
				window.location.reload(true);
			},
			error: function(){
				alert('Erro ao atualizar tarefa!');
			}
		});

	 })



	$('#cancelaedit').onclick= function(){
		window.location.reload(true);
	}
});