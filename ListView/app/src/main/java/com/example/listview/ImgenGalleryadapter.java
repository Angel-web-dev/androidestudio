package com.example.recyclerview;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.recyclerview.widget.RecyclerView;

import java.util.Collections;
import java.util.List;

public class ImageGalleryAdapter extends RecyclerView.Adapter<examViewHolder> {

  List<examData> list
    = Collections.emptyList();

  Context context;
  clickListener listiner;

  public ImageGalleryAdapter(List<examData> list,
                             Context context, clickListener listiner)
  {
    this.list = list;
    this.context = context;
    this.listiner = listiner;
  }

  @Override
  public examViewHolder
  onCreateViewHolder(ViewGroup parent,
                     int viewType)
  {

    Context context
      = parent.getContext();
    LayoutInflater inflater
      = LayoutInflater.from(context);

    // Inflate the layout

    View photoView
      = inflater
      .inflate(R.layout.exam_card,
        parent, false);

    examViewHolder viewHolder
      = new examViewHolder(photoView);
    return viewHolder;
  }

  @Override
  public void
  onBindViewHolder(final examViewHolder viewHolder,
                   final int position)
  {
    final int index = viewHolder.getAdapterPosition();
    viewHolder.examName
      .setText(list.get(position).name);
    viewHolder.examDate
      .setText(list.get(position).date);
    viewHolder.examMessage
      .setText(list.get(position).message);
    viewHolder.view.setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View view)
      {
        listiner.click(index);
      }
    });
  }

  @Override
  public int getItemCount()
  {
    return list.size();
  }

  @Override
  public void onAttachedToRecyclerView(
    RecyclerView recyclerView)
  {
    super.onAttachedToRecyclerView(recyclerView);
    }


}
