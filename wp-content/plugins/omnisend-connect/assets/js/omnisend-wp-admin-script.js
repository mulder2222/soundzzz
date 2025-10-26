jQuery( document ).ready(
	function ($) {
		$( '#get-started-link' ).click(
			function () {
				$.ajax(
					{
						type: 'POST',
						url: ajaxurl,
						data: {
							action: 'omnisend_track_connection_event',
							event_name: 'getStartedClicked'
						}
					}
				);
			}
		);

		$( '#wp-admin-auth-notice-link' ).click(
			function (event) {
				event.preventDefault();

				$.ajax(
					{
						type: 'POST',
						url: ajaxurl,
						data: {
							action: 'omnisend_track_connection_event',
							event_name: 'updatePermissionsWpAdminNoticeClicked'
						}
					}
				).then( redirectToAuth() );
			}
		);

		function redirectToAuth() {
			setTimeout(
					() => {
                window.location.href = $( '#wp-admin-auth-notice-link' ).data( 'auth-url' );
				},
				250
			);
		}
	}
);
