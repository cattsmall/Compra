<?php include('header.php'); ?>
<ul class="task-list">
	<li class="task">
		<article class="task-info">
			<header class="task-text">
				<h3 class="task-title" contenteditable="true">Task name</h3>
				<p contenteditable="true">Task notes if they want</p>
			</header>
			<section class="task-price-range">
				<p class="task-price minimum"><strong>Min:</strong> <span class="price">$0</span></p>
				<p class="task-price maximum"><strong>Max:</strong> <span class="price">$0</span></p>
				<a class="edit-task" href="#"><i class="icon-pencil"></i></a>
			</section>
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
						<label>Max:</label>
						<input type="number" placeholder="$0">
					</fieldset>
				</div>
				<button class="submit save-task"><i class="icon-ok"></i></button>
			</form>
		</article>
		<aside class="delete-task">
			<i class="icon-mail-reply"></i> <h4>Continue sliding to delete</h4>
		</aside>
	</li>
</ul>
<?php include('footer.php'); ?>