package com.example.tareas;

import android.content.Intent;
import android.os.Bundle;
import android.widget.Button;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {

    TextView txtBienvenida;
    Button btnAgregar, btnCompartir;
    RecyclerView recyclerView;
    ArrayList<Tarea> listaTareas;
    TareaAdapter adapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        txtBienvenida = findViewById(R.id.txtBienvenida);
        btnAgregar = findViewById(R.id.btnAgregar);
        btnCompartir = findViewById(R.id.btnCompartir);
        recyclerView = findViewById(R.id.recyclerView);

        // Recuperar usuario desde Login
        String usuario = getIntent().getStringExtra("usuario");
        txtBienvenida.setText("Bienvenido, " + usuario);

        // Inicializar lista
        listaTareas = new ArrayList<>();
        adapter = new TareaAdapter(listaTareas, tarea -> {
            Intent intent = new Intent(MainActivity.this, DetalleTareaActivity.class);
            intent.putExtra("titulo", tarea.getTitulo());
            intent.putExtra("descripcion", tarea.getDescripcion());
            startActivity(intent);
        });

        recyclerView.setLayoutManager(new LinearLayoutManager(this));
        recyclerView.setAdapter(adapter);

        // Botón agregar tarea
        btnAgregar.setOnClickListener(v -> {
            Intent intent = new Intent(MainActivity.this, NuevaTareaActivity.class);
            startActivityForResult(intent, 100);
        });

        // Botón compartir
        btnCompartir.setOnClickListener(v -> {
            StringBuilder sb = new StringBuilder();
            for (Tarea t : listaTareas) {
                sb.append("- ").append(t.getTitulo())
                        .append(": ").append(t.getDescripcion()).append("\n");
            }

            Intent sendIntent = new Intent();
            sendIntent.setAction(Intent.ACTION_SEND);
            sendIntent.putExtra(Intent.EXTRA_TEXT, sb.toString());
            sendIntent.setType("text/plain");
            startActivity(Intent.createChooser(sendIntent, "Compartir tareas"));
        });
    }

    // Recibir resultado de NuevaTareaActivity
    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == 100 && resultCode == RESULT_OK) {
            String titulo = data.getStringExtra("titulo");
            String descripcion = data.getStringExtra("descripcion");

            listaTareas.add(new Tarea(titulo, descripcion));
            adapter.notifyDataSetChanged();
        }
    }
}