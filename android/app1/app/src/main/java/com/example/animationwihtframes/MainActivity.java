package com.example.animationwihtframes;

import android.graphics.drawable.AnimationDrawable;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

public class MainActivity extends AppCompatActivity {
  // 1. Nombres de variables declarados consistentemente
  private AnimationDrawable animationGuy;
  private ImageView imagen; // Usaremos 'imagen' como el nombre de la variable ImageView

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    EdgeToEdge.enable(this);
    setContentView(R.layout.activity_main);

    // Ajuste para las barras del sistema (código que tenías antes, es bueno mantenerlo)
    ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main), (v, insets) -> {
      Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
      v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
      return insets;
    });

    // 2. Usar los nombres de variable correctos
    imagen = findViewById(R.id.imagenAnimation);
    imagen.setBackgroundResource(R.drawable.guyanimation); // Asegúrate de que este archivo XML exista en res/drawable

    // 3. Asignar al AnimationDrawable declarado
    animationGuy = (AnimationDrawable) imagen.getBackground();

    // 4. Iniciar la animación al hacer clic en la imagen
    imagen.setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View v) {
        if (animationGuy.isRunning()) {
          animationGuy.stop(); // Si está corriendo, la detenemos
        } else {
          animationGuy.start(); // Si no, la iniciamos
        }
      }
    });
  }
}
