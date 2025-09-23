// ViewHolder code for RecyclerView
package com.example.recyclerview_ejemplo_gpob;

import androidx.recyclerview.widget.RecyclerView;
import android.view.View;
import android.widget.TextView;

public class examViewHolder extends RecyclerView.ViewHolder {
  TextView examName;
  TextView examMessage;
  TextView examDate;
  View view;

  examViewHolder(View itemView)
  {
    super(itemView);
    examName = (TextView)itemView.findViewById(R.id.examName);
    examDate = (TextView)itemView.findViewById(R.id.examDate);
    examMessage = (TextView)itemView.findViewById(R.id.examMessage);
    view = itemView;
  }
}
