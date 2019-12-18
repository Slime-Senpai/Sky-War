-<?php
$file = file_get_contents("score.txt");
$scorearray = explode("\n", $file);
$scorearray2 = array();
foreach($scorearray as $value){
    array_push($scorearray2, explode(";", $value));
}
$putscore = true;
$newpseudo = true;
$score=$_GET["score"];
$pseudo=$_GET["pseudo"];
foreach($scorearray2 as $key => $value){
    if($value[1] == $pseudo){
        $newpseudo = false;
        if($value[0] >= $score)
            $putscore = false;
        else
            $scorearray2[$key][0] = $score;
        break;
    }
}

if($putscore){
    if($newpseudo)
        array_push($scorearray2, array($score, $pseudo));
    rsort($scorearray2);
    $put = "";
    foreach($scorearray2 as $key => $value){
        if($value[0])
            $put .= ($key != 0 ? "\n" : "")."$value[0];$value[1]";
    }
    file_put_contents("score.txt", $put);
}
?>
