<!DOCTYPE html>
<?php
$file = file_get_contents("score.txt");
$scorearray = explode("\n", $file);
$scorearray2 = array();
foreach($scorearray as $value){
    array_push($scorearray2, explode(";", $value));
}
$title = array("Score", "Pseudo");
$tab = genereTable($title, $scorearray2);
function genereTable($title, $body){
    $tableau = "<table><thead><tr>";
	foreach($title as $value){
		$tableau .= "<th>".$value."</th>";
	}
	$tableau .= "</tr></thead><tbody>";
	foreach($body as $value){
		$tableau .= "<tr>";
		foreach($value as $key => $value2){
				$tableau .= "<td>".$value2."</td>";
		}
		$tableau .= "<tr>";
	}
	return $tableau;
}
?>
<html>
<head>
    <script src="js/game/globalvariables.js"></script>
    <script src="js/graphique/Color.js"></script>
    <script src="js/graphique/GraphicalObject.js"></script>
    <script src="js/graphique/AngledObject.js"></script>
    <script src="js/game/Team.js"></script>
    <script src="js/bullets/Bullet.js"></script>
    <script src="js/powerups/Powerup.js"></script>
    <script src="js/planes/Plane.js"></script>
    <script src="js/planes/BasicEnemy.js"></script>
    <script src="js/planes/Player.js"></script>
    <script src="js/levels/Level.js"></script>
    <script src="js/game/game.js"></script>
    <link rel="stylesheet" href="css/canvas.css">
    <meta charset="utf-8">
</head>
<body>
    <section>
        <div id="posCanvas">
            <canvas id="myCanvas" width="600" height="800"></canvas>
        </div>
    </section>
    <input type="text" id="input1" value="Pseudo"></input>
	<input type="submit" onclick="ask(document.getElementById('input1').value)"></input>
	<?php echo $tab;?>
    <div id="version"><p>Version 3.0 in-dev</p></div>
</body>
</html> 