package com.example.kavfitbstuby;

import static java.lang.Integer.parseInt;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.Spinner;
import android.widget.TextView;

import com.example.kavfitbstuby.text.TextFunction;

public class MainActivity extends AppCompatActivity implements View.OnClickListener {


    private String[] figures = {"Куб", "Прямоугольная призма", "Пирамида", "Конус"};
    private LinearLayout layoutCube, layoutPrism, layoutPyramid, layoutCone;
    private EditText  cubeSideEt, prismWidthEt, prismHeightEt, prismLengthEt, pyramidAreaEt, pyramidHeightEt, coneRadiusEt, coneHeightEt;
    private TextView cubeResultTv, prismResultTv, pyramidResultTv, coneResultTv;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        ArrayAdapter<String> figuresAdapter = new ArrayAdapter<String>(this,
                                              R.layout.spinner_text_layout, figures);


        figuresAdapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);

        Spinner spFigures = (Spinner) findViewById(R.id.spFigures);
        spFigures.setAdapter(figuresAdapter);
        spFigures.setPrompt("Выберите фигуру");
        // EditText blocks
        cubeSideEt = findViewById(R.id.cubeHeight);
        prismWidthEt = findViewById(R.id.prismWidth);
        prismHeightEt = findViewById(R.id.prismHeight);
        prismLengthEt = findViewById(R.id.prismLength);
        pyramidAreaEt = findViewById(R.id.pyramidArea);
        pyramidHeightEt = findViewById(R.id.pyramidHeight);
        coneRadiusEt = findViewById(R.id.coneRadius);
        coneHeightEt = findViewById(R.id.coneHeight);
        // layouts
        layoutCube = findViewById(R.id.includeCube);
        layoutPrism = findViewById(R.id.includePrism);
        layoutPyramid = findViewById(R.id.includePyramid);
        layoutCone = findViewById(R.id.includeCone);
        // result
        cubeResultTv = findViewById(R.id.cubeResult);
        prismResultTv = findViewById(R.id.prismResult);
        pyramidResultTv = findViewById(R.id.pyramidResult);
        coneResultTv = findViewById(R.id.coneResult);
        spFigures.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
            @Override
            public void onItemSelected(AdapterView<?> parentView, View selectedItemView, int position, long id) {
                String selectedFigure = figures[position];
                switch (selectedFigure) {
                    case "Куб":
                        layoutCube.setVisibility(View.VISIBLE);
                        layoutPrism.setVisibility(View.GONE);
                        layoutPyramid.setVisibility(View.GONE);
                        layoutCone.setVisibility(View.GONE);
                        break;
                    case "Прямоугольная призма":
                        layoutCube.setVisibility(View.GONE);
                        layoutPrism.setVisibility(View.VISIBLE);
                        layoutPyramid.setVisibility(View.GONE);
                        layoutCone.setVisibility(View.GONE);
                        break;
                    case "Пирамида":
                        layoutCube.setVisibility(View.GONE);
                        layoutPrism.setVisibility(View.GONE);
                        layoutPyramid.setVisibility(View.VISIBLE);
                        layoutCone.setVisibility(View.GONE);
                        break;
                    case "Конус":
                        layoutCube.setVisibility(View.GONE);
                        layoutPrism.setVisibility(View.GONE);
                        layoutPyramid.setVisibility(View.GONE);
                        layoutCone.setVisibility(View.VISIBLE);
                        break;
                }
            }

            @Override
            public void onNothingSelected(AdapterView<?> parentView) {

            }
        });

        Button cubeCalcButton = findViewById(R.id.cubeVolumeCalc);
        Button prismCalcButton = findViewById(R.id.prismVolumeCalc);
        Button pyramidCalcButton = findViewById(R.id.pyramidVolumeCalc);
        Button coneCalcButton = findViewById(R.id.coneVolumeCalc);
        cubeCalcButton.setOnClickListener(this);
        prismCalcButton.setOnClickListener(this);
        pyramidCalcButton.setOnClickListener(this);
        coneCalcButton.setOnClickListener(this);
    }
    @Override
    public void onClick(View view) {
        int viewId = view.getId();
        if (viewId == R.id.cubeVolumeCalc) {
            cubeResultTv.setText(String.valueOf(getValue(cubeSideEt) * 3));
        } else if (viewId == R.id.prismVolumeCalc) {
            prismResultTv.setText(String.valueOf(getValue(prismWidthEt) *
                    getValue(prismHeightEt) *getValue(prismLengthEt)));
        } else if (viewId == R.id.pyramidVolumeCalc) {
            pyramidResultTv.setText(String.valueOf((1.0 / 3.0) *
                    getValue(pyramidAreaEt) * getValue(pyramidHeightEt)));
        } else if (viewId == R.id.coneVolumeCalc) {
            coneResultTv.setText(String.valueOf((1.0 / 3.0) *
                    Math.PI * Math.pow(getValue(coneRadiusEt), 2) * getValue(coneHeightEt)));
        }
    }

    private int getValue(EditText editText){
        String value = editText.getText().toString();
        if(value.equals(""))
            return 0;
        return parseInt(value);
    }
}