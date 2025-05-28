<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Resumen del paciente</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    p { margin: 8px 0; }
    strong { color: #333; }
  </style>
</head>
<body>
  <h1>Resumen de la información recibida</h1>

  <?php
  // Recoger datos del formulario
  $nombre = htmlspecialchars($_POST['nombre'] ?? 'No especificado');
  $sexo = $_POST['sexo'] ?? '';
  $altura = htmlspecialchars($_POST['altura'] ?? 'No especificado');
  $fecha_nacimiento = htmlspecialchars($_POST['fecha_nacimiento'] ?? 'No especificada');
  $semana = htmlspecialchars($_POST['semana'] ?? 'No indicada');
  $fumador = isset($_POST['fumador']);
  $cigarrillos = htmlspecialchars($_POST['cigarrillos'] ?? '');
  $observaciones = htmlspecialchars($_POST['observaciones'] ?? '');

  // Formatear sexo
  $sexoStr = $sexo === 'H' ? 'Hombre' : ($sexo === 'M' ? 'Mujer' : 'No especificado');

  // Formatear cigarrillos
  if ($fumador) {
    $cigarrillosStr = match($cigarrillos) {
      '1-5' => 'Entre 1 y 5 cigarrillos/día',
      '6-10' => 'Entre 6 y 10 cigarrillos/día',
      'Más de 10' => 'Más de 10 cigarrillos/día',
      default => 'No especificado',
    };
  } else {
    $cigarrillosStr = 'N/A';
  }

  echo "<p><strong>Nombre:</strong> $nombre</p>";
  echo "<p><strong>Sexo:</strong> $sexoStr</p>";
  echo "<p><strong>Altura:</strong> $altura cm</p>";
  echo "<p><strong>Fecha nac.:</strong> $fecha_nacimiento</p>";
  echo "<p><strong>Semana:</strong> $semana</p>";
  echo "<p><strong>Fumador:</strong> " . ($fumador ? 'Sí' : 'No') . "</p>";
  echo "<p><strong>Cigarrillos:</strong> $cigarrillosStr</p>";
  echo "<p><strong>Observaciones:</strong> " . ($observaciones ?: 'Ninguna') . "</p>";
  ?>
</body>
</html>
