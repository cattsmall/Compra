<?php include('header.php'); ?>
<ul class="task-list">
	<li class="task">
		<section class="task-info">
			<header class="task-text">
				<h3 class="task-title">Task name</h3>
				<p>Task notes if they want</p>
			</header>
			<form class="task-price-range">
				<select class="task-price-currency">
					<option>$</option>
					<option>£</option>
				</select>
				<div class="three-fourths">
					<fieldset class="task-price minimum">
						<label>Min:</label>
						<input type="number" placeholder="$0">
					</fieldset>
					<fieldset class="task-price maximum">
						<label>Min:</label>
						<input type="number" placeholder="$0">
					</fieldset>
				</div>
				<button class="submit save-task"><i class="icon-ok"></i></button>
			</form>
		</section>
		<aside class="delete-task">
			<i class="icon-mail-reply"></i> <h4>Continue sliding to delete</h4>
		</aside>
	</li>
</ul>
<?php include('footer.php'); ?>