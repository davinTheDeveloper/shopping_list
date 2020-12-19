$(function() {
	// add new items
	$('#js-shopping-list-form').submit(function(event) {
		event.preventDefault()
		const shoppingItem = $('#shopping-list-entry').val()

		$('ul.shopping-list').prepend(
			`<li>
				<span class="shopping-item">${shoppingItem}</span>
				<div class="shopping-item-controls">
					<button class="shopping-item-toggle">
						<span class="button-label">check</span>
					</button>
					<button class="shopping-item-delete">
						<span class="button-label">delete</span>
					</button>
				</div>
			</li>`
		)
		$('#shopping-list-entry').val('')
	})

	// remove when delete button is clicked
	$('ul.shopping-list').on('click', 'button.shopping-item-delete', function(
		event
	) {
		$(this)
			.closest('li')
			.remove()
	})

	// toggle 'shopping-item__checked' class when checked
	$('ul.shopping-list').on('click', 'button.shopping-item-toggle', function(
		event
	) {
		// console.log($(this).closest('.shopping-item'))
		$(this)
			.closest('li')
			.find('.shopping-item')
			.toggleClass('shopping-item__checked')
	})
})