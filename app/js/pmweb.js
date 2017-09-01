$(document).ready(function() {

	let style = `<style>
		ul#navMenu li {
			font-size: 13.5px;
		}
		#caminho ul li a {
			text-decoration: underline;
		}
		.caminho-pagina-atual {
			text-decoration: none!important;
		}
		#busca-fechada-container #destino {
			width: 29%;
		}
		#busca-fechada-container #destino span {
			text-transform: uppercase;
		}
		.mcolor-header {
			background-color: #f5534b;
		}
		.mcolor-cliente-principal-bg {
			background-color: #302c29;
		}
		.mcolor-busca-bright {
			background-color: #493f38;
		}
		.mcolor-busca-bright:hover {
			background-color: #4e443c;
		}
		.mcolor-busca-dark {
			background-color: #201f1d;
		}
		.mcolor-busca-dark:hover {
			background-color: #1b1917;
		}
		.mcolor-label-text {
			color: #f5534b;
		}
		.mcolor-label-text2 {
			color: #f5534b;
		}
		.content-section {
			width: 1007px;
		}
		#container-campos-nova-busca {
			margin-top: 43px;
		}
		#busca-destino, #busca-periodo-label {
			width: 477px;
			height: 46px;
		}
		.busca-field {
			width: 477px;
		}
		#busca-destino-label {
			margin-top: 13.5px;
		}
		#busca-destino-icon {
			margin-top: 7px;
			margin-right: 45px;
		}
		#destino:hover, #datas:hover, #adultos:hover, #criancas:hover, #modificarBusca:hover {
			color: #f5534b;
		}
		#periodo-label-dias {
			font-size: 13.5px;
			margin-top: 14px;
			margin-left: 18px;
		}
		#periodo-label-icon{
			margin-top: 7px;
		}
		#busca-fechada-container {
			padding-left: 24px;
			padding-right: 24px;
		}
		#busca-fechada-container #imgDestino {
			margin-left: 0;
		}
		#busca-fechada-container #criancas {
			width: 16%;
		}
		#busca-field-criancas {
			margin-left: -183px;
		}
		#bloco-seletor-crianca-1 > span, #bloco-seletor-crianca-2 > span {
			left: 5px;
		}
		#busca-fechada-container #modificarBusca {
			width: 14%;
			text-align: right;
		}
		#modificarBusca:after {
			margin-right: 0;
		}
		#busca-fechada-container #destino, #busca-fechada-container #datas, #busca-fechada-container #adultos, #busca-fechada-container #criancas, #busca-fechada-container #modificarBusca {
			margin-top: 9px;
		}
		#busca-fechada-container #adultos div > span, #busca-fechada-container #criancas div > span, #busca-fechada-container #modificarBusca div > span {
			font-size: 16px;
			margin-top: 6px;
		}
		.bloco-seletor-adulto-selected, .bloco-seletor-crianca-selected {
			background-color: #493f38!important;
		}
		#seletor-adulto-mais-option-container, #seletor-crianca-mais-option-container {
			width: 59px;
		}
		#criancas-quantidade-label {
			color: #fff;
		}
		.criancas-editar-label {
			font-size: 10px;
			text-decoration: underline;
		}
		.seletor-idade-dropdown {
			width: 59px;
			z-index: 123;
			left: -1px;
			top: 52px;
		}
		.mcolor-cliente-principal-bg.mcolor-busca-dark-border {
			background-color: #302c29;
			border-color: #201f1d!important;
		}
		#busca-container-adultos-criancas {
			margin-top: 38px;
		}
		.mcolor-cliente-principal-bg-hover:hover, .seletor-adulto-mais-option-item:hover, .seletor-crianca-mais-option-item:hover {
			background: #493f38;
		}
		.seletor-idade-label {
			display: inline-block;
			width: 100%;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
		.seletor-idade-label {
			padding-top: 14px;
			margin-bottom: 0;
		}
		.crianca-idade-selected {
			padding-top: 31px;
			margin-bottom: 0;
		}
		.seletor-idade.mcolor-busca-dark {
			border: 1px solid #f5534b;
			box-sizing: border-box;
		}
		.bloco-seletor-adulto-crianca {
			height: 53px;
			width: 61px;
			margin-right:30px;
		}
		.bloco-seletor-adulto-crianca:nth-child(3) {
			margin-right: 0;
		}
		#bloco-seletor-adulto-1 > span {
			left: 5px;
		}
		#bloco-seletor-adulto-2 > span {
			left: 6px;
		}
		#busca-fechada-container #destino div > span, #busca-fechada-container #datas div > span {
			margin-left: 7px;
		}
		#busca-promocode-label {
			font-size: 12px;
			color: #fff;
			padding-top: 2px;
			font-size: 13px;
		}
		#busca-promocode-label:after {
			margin-bottom: 3px;
		}
		#busca-btn {
			margin-top: 36px;
			margin-right: 0px;
			background-color: #f5534b;
			line-height: 44px;
			font-size: 16px;
			font-weight: 600;
		}
		.mcolor-action-btn {
			background-color: #f5534b;
		}
		.mcolor-action-btn:hover {
			background-color: #d14d46 !important;
		}
		#busca-calendario {
			height: auto;
			width: 481px;
			right: -4px;
			padding: 25px;
			box-sizing: border-box;
		}
		#calendario-1 {
			width: 100%;
			padding-top: 0;
			margin-left: 0;
		}
		#calendario-2 {
			display: none;
		}
		.calendario-mes-ano-label {
			font-size: 14px;
		}
		.calendario-dias-semana {
			margin-top: 22px;
		}
		#busca-calendario .dia-semana {
			color: #fff !important;
		}
		.dia-semana {
			width: 47px;
		}
		.gridDatas .blocoData {
			width: 47px;
		}
		#alerta-best-rates {
			display: none;
		}
		#busca-calendario .bestRate, #busca-calendario .tp-chegada, #busca-calendario .tp-saida {
			color: #8D8986;
		}
		.celulaEmpty .diaMes, .celulaData .bestRate {
			font-size: 10px;
		}
		.arrow-left {
			left: 0;
		}
		.arrow-right {
			right: 0;
		}
		.img-hotel-arrow-left:active, .img-hotel-arrow-right:active {
			color: transparent;
		}
		#busca-calendario .arrow-left, #busca-calendario .arrow-right {
			border-left-color: #fff;
		}
		#busca-calendario .startDate, #busca-calendario .celulaData:hover {
			background-color: #f5534b !important;
			border-radius: 25px;
		}
		#busca-calendario .inBetweenDate {
			background-color: #493f38;
			opacity: 1;
			position: relative;
		}
		#busca-calendario .inBetweenDate:after {
			content: '';
			position: absolute;
			height: 100%;
			width: 47px;
			left: -23px;
			top: 0;
			background: #493f38;
			z-index: -1;
		}
		#busca-calendario .inBetweenDate.startDate:after, #busca-calendario .blocoData:nth-child(1) .inBetweenDate:after {
			content: none;
		}
		#busca-calendario .bestRate, #busca-calendario .tp-chegada, #busca-calendario .tp-saida {
			color: #fff;
		}
		#busca-calendario .arrow-left, #busca-calendario .arrow-right {
			background: #493f38;
			height: 100px;
			width: 35px;
			top: 0;
			bottom: 0;
			margin: auto;
			border: none;
		}
		#busca-calendario .arrow-left:after, #busca-calendario .arrow-right:after {
			content: '';
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			margin: auto;
			width: 0;
			height: 0;
			border-top: 10px solid transparent;
			border-bottom: 10px solid transparent;
		}
		#busca-calendario .arrow-left:after {
			border-right: 10px solid #fff;
		}
		#busca-calendario .arrow-right:after {
			border-left: 10px solid #fff;
		}
		.page-content {
			margin-top: 30px;
			background: none;
			box-shadow: none!important;
			border-radius: 0!important;
		}
		#listagemHoteis .itemHotel {
			box-shadow: 1px 3px 11px lightgrey;
			border-radius: 12px;
			background: white;
			padding-left: 20px;
			padding-right: 20px;
			padding-bottom: 25px;
			box-sizing: border-box;
			border: none;
			width: auto;
			vertical-align: top;
			width: 300px;
			margin-right: 26px;
		}
		.img-hotel-arrow-right, .img-hotel-arrow-left {
			text-align: left;
			border-radius: 30px;
			width: 60px;
			color: transparent;
			background-color: rgba(0, 0, 0, 0.7);
		}
		.img-hotel-arrow-right {
			left: auto;
			right: -35px;
		}
		.img-hotel-arrow-left {
			right: auto;
			left: -35px;
		}
		.img-hotel-arrow-right:after, .img-hotel-arrow-left:after {
			position: absolute;
			top: 0;
			height: 100%;
			width: 100%;
			color: #fff;
			font-size: 19px;
			font-family: 'Tahoma';
		}
		.img-hotel-arrow-right:after {
			content: '>';
			left: 9px;
		}
		.img-hotel-arrow-left:after {
			content: '<';
			left: 39px;
		}
		.img-hotel-arrow-right:active:after, .img-hotel-arrow-left:active:after {
			color: #f5534b;
		}
		#listagemHoteisContent > div:nth-child(1) {
			margin-top: 0;
		}
		#listagemHoteis .itemHotel:last-child {
			padding-bottom: 20px;
			margin-right: 0;
		}
		.itemHotel .slider-imagens-hotel, .itemHotel > img  {
			float: none;
			margin: 0 auto 15px;
			display: block;
			overflow: hidden;
		}
		.itemHotelContent {
			margin: 0;
			height: auto;
		}
		.itemHotel-tripRating-container {
			position: absolute;
			right: 0;
			width: 100px;
			height: 30px;
			top: -6px;
			border: none;
		}
		.itemHotel-tripRating-container:hover {
			background: none;
		}
		.itemHotel-tripRating-container:after {
			content: none;
		}
		.itemHotel-tripRating {
			width: 125px;
			margin: 0;
		}
		.tituloHotel {
			float: none;
			width: auto;
			height: auto;
		}
		.itemHotelContent .itemVarNomeHotel {
			max-width: 160px;
			font-size: 19px;
			color: #444444;
			margin-bottom: 23px;
			display: block;
			float: none;
			width: auto;
		}
		.mcolor-cliente-principal-text {
			color: #f5534b;
		}
		.itemHotelContent .infoHotel {
			float: none;
			color: #666666;
			padding-top: 0;
			padding-bottom: 0;
		}
		.icoEnderecoHotel {
			height: 29px;
			width: 28px;
		}
		.icoEnderecoHotel:empty {
			display: none;
		}
		.icoEnderecoHotel > span {
			position: relative;
			top: -5px;
			left: -3px;
		}
		.itemHotelContent .infoHotel .itemVarTelefoneHotel {
			display: block;
			margin: 0;
			height: auto;
		}
		.indisp-content {
			margin-top: 3px;
		}
		.hotel-indisponivel-ico {
			width: 30%;
		}
		.hotel-indisponivel-texto-container {
			margin-top: 0;
		}
		.hotel-indisponivel-texto-titulo-roomnightperiodo {
			line-height: 1.3;
		}
		.itemHotelContent .infoAcomodacao {
			float: none;
			margin-top: 20px;
		}
		.itemHotelContent .infoAcomodacao .itemAcomodacao {
			float: none;
			color: #666666;
		}
		.icoAcomodacaoUmaPessoa {
			width: 19px;
		}
		.icoAcomodacaoUmaPessoa > span {
			font-size: 42px;
			top: -12px;
		}
		.hoteis-ico-mais-pessoas {
			font-size: 13px;
			position: static;
			top: 0;
			left: 0;
			margin-right: 13px;
		}
		.itemHotelContent .infoAcomodacao .itemVarDescricaoAcomodacao, .itemHotelContent .infoAcomodacao .itemBtnSelecionarAcomodacao {
			float: none;
			margin-top: 3px;
			margin-left: 30px;
		}
		.itemHotelContent .infoAcomodacao .itemBtnSelecionarAcomodacao {
			display: none;
		}
		.itemHotelContent .blocoReserve {
			float: none;
			position: initial;
			width: auto;
			margin-top: 20px;
		}
		.valorContainer {
			float: none;
			display: inline-block;
			width: auto;
			margin-right: 30px;
		}
		.itemHotelContent .blocoReserve .itemVarValorSemDesconto {
			float: left;
			text-align: left;
		}
		.itemHotelContent .blocoReserve .itemVarValorFinal {
			float: none;
			display: block;
			text-align: left;
			margin: 0;
			color: #444444;
		}
		.itemVarValorAuxiliar {
			float: none;
			display: block;
			margin: 0;
			color: #888888;
		}
		.itemHotelContent .itemBtnMaisAcomodacoes {
			display: none;
			float: none;
			margin: 0;
		}
		.itemHotelContent .blocoReserve .itemVarDescricaoFormasPagamento {
			display: none;
		}
		.itemHotelContent .blocoReserve .itemBtnEfetuarReserva {
			font-size: 15px;
			margin: 0;
			display: inline-block;
			vertical-align: top;
			float: none;
		}
		.conteudoBusca span {
			color: #999999;
		}
		.conteudoBusca span:hover {
			color: #f5534b;
			text-decoration: none;
		}
		.btnApagarBusca {
			font-size: 12px;
			color: #999999;
		}
		.itemHotelContent .blocoReserve .itemVarPercentualDesconto {
			display: none;
			float: none;
		}
		.promocoes {
			color: #f5534b;
			font-weight: 500;
			text-align: center;
			margin-top: 25px;
			margin-bottom: 0;
			cursor: pointer;
		}
		#modal {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(70,70,70,0.9);
			z-index: 100;
			display: none;
		}
		.modal-box {
			width: 935px;
			background: #fff;
			height: 565px;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
			border-radius: 5px;
			padding: 38px 30px;
			box-sizing: border-box;
		}
		.modal-title {
			font-family: 'Roboto Condensed';
			font-weight: 600;
			text-transform: uppercase;
			font-size: 1.8em;
			color: #444444;
			margin: 0 0 26px 50px;
		}
		.modal-scroll {
			overflow-y: scroll;
			height: 415px;
			box-sizing: border-box;
		}
		.promo-item {
			width: 33.2%;
			display: inline-block;
			vertical-align: top;
			margin-bottom: 30px;
			border-right: 1px dotted #666;
			color: #666666;
			line-height: 1.5;
			font-size: 1.05em;
		}
		.promo-item:nth-child(3n) {
			border: none;
		}
		.nome-tarifa {
			margin-bottom: 7px;
			color: #444444;
			display: inline;
			vertical-align: middle;
			margin: 0 5px 0 0;
		}
		.info {
			height: 15px;
			width: 15px;
			background: #999;
			border-radius: 25px;
			display: inline-block;
			position: relative;
			cursor: pointer;
			margin: 0;
			vertical-align: middle;
		}
		.info:hover {
			background: #f5534b;
		}
		.info:hover .info-details {
			display: block;
		}
		.relative {
			position: fixed;
		}
		.info:before {
			content: '?';
			position: absolute;
			text-align: center;
			color: #fff;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			margin: auto;
			line-height: 1;
			font-size: 12px;
			height: 12px;
		}
		.info-details {
			background: #fff;
			border: 1px solid #DDD;
			box-sizing: border-box;
			border-radius: 10px;
			line-height: 1.45;
			font-size: 0.75em;
			color: #777;
			padding: 7px 14px;
			position: absolute;
			width: 250px;
			top: -120px;
			left: -110px;
			box-shadow: 2px 4px 10px rgba(0,0,0,0.2);
			display: none;
		}
		.info-details:before {
			content: '';
			position: absolute;
			height: 0;
			width: 0;
			border-top: 8px solid #fff;
			border-left: 6px solid transparent;
			border-right: 6px solid transparent;
			bottom: -8px;
			left: 110px;
		}
		.valor {
			display: inline-block;
			text-decoration: line-through;
			font-size: 0.95em;
			margin: 0 20px 0 0;
		}
		.valor-desc {
			display: inline-block;
			color: #EF6620;
			font-weight: 600;
			font-size: 1.35em;
			margin: 8px 0;
		}
		.item-wrapper {
			text-align: left;
			width: 180px;
			margin: 0 auto;
		}
		.tarifa-desc {
			display: block;
		}
		.link {
			text-decoration: none;
		}
		.promo-item .mcolor-action-btn {
			background-color: #f5534b;
			height: 40px;
			width: 130px;
			color: #fff;
			text-align: center;
			line-height: 40px;
			font-size: 15px;
			border-radius: 5px;
			font-weight: 500;
			cursor: pointer;
			margin-bottom: 10px;
			margin-top: 5px;
			text-transform: uppercase;
			text-decoration: none;
		}
	</style>`;

	let modal = `<div id="modal">
					<div class="modal-box">
						<h3 class="modal-title">Promoções</h3>
						<div class="modal-scroll"></div>
					</div>
				</div>`;

	let promocoes = `<p class="promocoes">Ver promoções do hotel</p>`;

	$('body').append(modal);
	$('body').append(style);

	$.each($('.itemHotel'), function(key, val) {
		$(this).find('.itemHotelContent').append(promocoes);
	});

	$(document).on('click', '#modal', function() {
		$(this).hide();
	});

	$(document).on('click', '.modal-box', function(e) {
		e.stopPropagation();
	});

	$(document).on('click', '.promocoes', function() {
		$('.modal-scroll').html('');

		let hotel_id = $(this).siblings('.infoAcomodacao').attr('onclick');
		hotel_id = hotel_id.split(',')[0].substr(-1);

		$.get("http://pmweb.agencia.pmweb.com.br/teste-cro/promocoes/"+hotel_id+".json", function(response) {
			$.each(response, function(key, val) {

					let descricoes = '';

					$.each(response[key]['DescricaoTarifa'], function (key, val) {
						descricoes += `<li class="tarifa-desc">- `+val+`</li>`
					});

					let promocao = `<div class="promo-item">
										<div class="item-wrapper">
											<h4 class="nome-tarifa">`+response[key]['NomeTarifa']+`</h4>
											<div class="info">
												<div class="relative">
													<div class="info-details">`+response[key]['RegrasTarifa']+`</div>
												</div>
											</div>
											<ul class="descricao-tarifa">`+descricoes+`</ul>
											<p class="valor">R$ `+response[key]['ValorTarifaSemDesconto']+`,00</p>
											<p class="valor-desc"> R$`+response[key]['ValorTarifa']+`,00</p>
											<a class="link" href="`+response[key]['LinkPublico']+`" target="_blank">
												<div class="itemBtnEfetuarReserva mcolor-action-btn">Reservar</div>
											</a>
										</div>
									</div>`;

					$('.modal-scroll').append(promocao);
			});
			$('#modal').show();
		});
	});
});