jQuery( document ).ready(
	function ($) {
		$( document ).on(
			{
				ajaxStart: function () {
					$( 'body' ).addClass( 'omnisend-ajax-loading' );
				},
				ajaxStop: function () {
					$( 'body' ).removeClass( 'omnisend-ajax-loading' );
				}
			}
		);

		$( '.connect-account-btn' ).click(
			function () {
				$.ajax(
					{
						type: 'POST',
						url: ajaxurl,
						data: {
							action: 'omnisend_track_connection_event',
							event_name: 'connectAccountClicked'
						}
					}
				);
			}
		);

		$( '.create-account-btn' ).click(
			function () {
				$.ajax(
					{
						type: 'POST',
						url: ajaxurl,
						data: {
							action: 'omnisend_track_connection_event',
							event_name: 'createAccountClicked'
						}
					}
				);
			}
		);

		$( '#permalink-notice-link' ).click(
			function () {
				$.ajax(
					{
						type: 'POST',
						url: ajaxurl,
						data: {
							action: 'omnisend_track_connection_event',
							event_name: 'permalinksNoticeClicked'
						}
					}
				);
			}
		);

		$( '#connection-error-switch-brand' ).click(
			function () {
				$.ajax(
					{
						type: 'POST',
						url: ajaxurl,
						data: {
							action: 'omnisend_track_connection_event',
							event_name: 'connectionErrorNoticeSwitchBrandClicked'
						}
					}
				);
			}
		);

		$( '#omnisend-auth-notice-link' ).click(
			function () {
				$.ajax(
					{
						type: 'POST',
						url: ajaxurl,
						data: {
							action: 'omnisend_track_connection_event',
							event_name: 'updatePermissionsOmnisendNoticeClicked'
						}
					}
				).then( redirectToAuth() );
			}
		);

		function redirectToAuth() {
			setTimeout(
				() => {
                window.location.href = $( '#omnisend-auth-notice-link' ).data( 'auth-url' );
				},
				250
			);
		}
	}
);
