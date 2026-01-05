const data = {
    "title": "Swimming Pool (320s)",
    "imageTableFontSizeOverride": "12px",
    "images": [
        {
            "elements": [
                {
                    "title": "PT",
                    "version": "-",
                    "image": "images/pt_320s.png"
                },
                {
                    "title": "SPPM",
                    "version": "-",
                    "image": "images/sppm_320s.png"
                },
                {
                    "title": "DeepCombiner",
                    "version": "-",
                    "image": "images/dc_320s.png"
                },
                {
                    "title": "NeuralJS",
                    "version": "-",
                    "image": "images/js_single_320s.png"
                },
                {
                    "title": "NeuralJS (PT + ODIN)",
                    "version": "-",
                    "image": "images/js_320s.png"
                },
                {
                    "title": "Ours",
                    "version": "-",
                    "image": "images/ds_320s.png"
                },
                {
                    "title": "Reference",
                    "version": "-",
                    "image": "images/reference.png"
                }
            ]
        },
    ],
    "stats": [
        {
            "labels": [
                "PT",
                "SPPM",
                "DeepCombiner",
                "NeuralJS",
                "NeuralJS (PT + ODIN)",
                "Ours"
            ],
            "series": [
				{
                    "label": "relMSE",
                    "data": [
                        "0.179365",
                        "0.404343",
                        "0.018652",
                        "0.004780",
                        "0.003449",
                        "0.002991"
                    ]
                },
            ]
        }
    ],
}