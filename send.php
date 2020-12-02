<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $servername = "localhost";
    $username = "clicou84_admin_cp";
    $password = "cp@189723";
	$dbname = "clicou84_parcerias";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Erro ao conectar: " . $conn->connect_error);
    }

	$nome = $_POST["nomectt"];
	$email = $_POST["emailctt"];
	$empresa = $_POST["empresactt"];	
	$site = $_POST["sitectt"];    
	$telefone = $_POST["telefonectt"];	
	$desc = $_POST["descctt"];	


	$sql = "INSERT INTO form_parcerias (nome_repre, email_repre, empresa, site_empresa, telefone, mensagem)
VALUES ('{$nome}', '{$email}', '{$empresa}', '{$site}', '{$telefone}', '{$desc}')";

	$result = $conn->query($sql);

	if ($result === TRUE) {
        echo "Mensagem enviada com sucesso! Retornaremos seu contato :)";
      } else {
        echo "Erro: " . $sql . "<br>" . $conn->error;
      }

	$conn->close();

	
}

?>