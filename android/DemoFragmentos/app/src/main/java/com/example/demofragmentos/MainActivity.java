package com.example.demofragmentos;

import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;
import androidx.activity.EdgeToEdge;

public class MainActivity extends AppCompatActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Habilita el modo Edge-to-Edge
    EdgeToEdge.enable(this);

    // Establece el layout de la actividad
    setContentView(R.layout.activity_main);

    // Configura el listener para los insets (padding para las barras del sistema)
    ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main), (v, insets) -> {
      Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
      v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
      return insets;
    });

    // Añade el fragmento solo si no hay un estado guardado previo
    // para evitar crear fragmentos duplicados.
    if (savedInstanceState == null) {
      getSupportFragmentManager().beginTransaction()
        .setReorderingAllowed(true)
        .add(R.id.fragment_container_view, DemoFragmento.class, null)
        .commit();
    }
  }
}

