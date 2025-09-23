// En: app/src/main/java/com/example/demofragmentos/DemoFragmento.java
package com.example.demofragmentos;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

public class DemoFragmento extends Fragment {

  @Nullable
  @Override
  public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
    // Infla el layout para este fragmento
    return inflater.inflate(R.layout.fragment_demo, container, false);
  }
}
