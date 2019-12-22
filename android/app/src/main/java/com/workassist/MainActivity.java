package com.workassist;

import com.facebook.react.ReactActivity;
import android.os.Bundle;
import android.content.Intent;
import com.reactnativenavigation.NavigationActivity;
public class MainActivity extends NavigationActivity {
  @Override
  public void onNewIntent(Intent intent){
    super.onNewIntent(intent);
    setIntent(intent);
  }

   
  @Override
  protected void  onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);
  }
}