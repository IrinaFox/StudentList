'use strict';

//https://www.google.com.ua/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&cad=rja&uact=8&ved=0ahUKEwjDqOHh37_SAhXMB5oKHWZdDLgQFggfMAE&url=http%3A%2F%2Fwww.statvision.com%2Fwebinars%2Fcountries%2520of%2520the%2520world.xls&usg=AFQjCNFstXgHyYHAnQTBXbuyOkeuRVrNyQ&sig2=Kq0Vni7o9Q3xWEmccp1QoA&bvm=bv.148747831,d.bGs
var countriesSCV = `Afghanistan 	ASIA (EX. NEAR EAST)         	31056997	647500
Albania 	EASTERN EUROPE                     	3581655	28748
Algeria 	NORTHERN AFRICA                    	32930091	2381740
American Samoa 	OCEANIA                            	57794	199
Andorra 	WESTERN EUROPE                     	71201	468
Angola 	SUB-SAHARAN AFRICA                 	12127071	1246700
Anguilla 	LATIN AMER. & CARIB    	13477	102
Antigua & Barbuda 	LATIN AMER. & CARIB    	69108	443
Argentina 	LATIN AMER. & CARIB    	39921833	2766890
Armenia 	C.W. OF IND. STATES 	2976372	29800
Aruba 	LATIN AMER. & CARIB    	71891	193
Australia 	OCEANIA                            	20264082	7686850
Austria 	WESTERN EUROPE                     	8192880	83870
Azerbaijan 	C.W. OF IND. STATES 	7961619	86600
Bahamas, The 	LATIN AMER. & CARIB    	303770	13940
Bahrain 	NEAR EAST                          	698585	665
Bangladesh 	ASIA (EX. NEAR EAST)         	147365352	144000
Barbados 	LATIN AMER. & CARIB    	279912	431
Belarus 	C.W. OF IND. STATES 	10293011	207600
Belgium 	WESTERN EUROPE                     	10379067	30528
Belize 	LATIN AMER. & CARIB    	287730	22966
Benin 	SUB-SAHARAN AFRICA                 	7862944	112620
Bermuda 	NORTHERN AMERICA                   	65773	53
Bhutan 	ASIA (EX. NEAR EAST)         	2279723	47000
Bolivia 	LATIN AMER. & CARIB    	8989046	1098580
Bosnia & Herzegovina 	EASTERN EUROPE                     	4498976	51129
Botswana 	SUB-SAHARAN AFRICA                 	1639833	600370
Brazil 	LATIN AMER. & CARIB    	188078227	8511965
British Virgin Is. 	LATIN AMER. & CARIB    	23098	153
Brunei 	ASIA (EX. NEAR EAST)         	379444	5770
Bulgaria 	EASTERN EUROPE                     	7385367	110910
Burkina Faso 	SUB-SAHARAN AFRICA                 	13902972	274200
Burma 	ASIA (EX. NEAR EAST)         	47382633	678500
Burundi 	SUB-SAHARAN AFRICA                 	8090068	27830
Cambodia 	ASIA (EX. NEAR EAST)         	13881427	181040
Cameroon 	SUB-SAHARAN AFRICA                 	17340702	475440
Canada 	NORTHERN AMERICA                   	33098932	9984670
Cape Verde 	SUB-SAHARAN AFRICA                 	420979	4033
Cayman Islands 	LATIN AMER. & CARIB    	45436	262
Central African Rep. 	SUB-SAHARAN AFRICA                 	4303356	622984
Chad 	SUB-SAHARAN AFRICA                 	9944201	1284000
Chile 	LATIN AMER. & CARIB    	16134219	756950
China 	ASIA (EX. NEAR EAST)         	1313973713	9596960
Colombia 	LATIN AMER. & CARIB    	43593035	1138910
Comoros 	SUB-SAHARAN AFRICA                 	690948	2170
Congo, Dem. Rep. 	SUB-SAHARAN AFRICA                 	62660551	2345410
Congo, Repub. of the 	SUB-SAHARAN AFRICA                 	3702314	342000
Cook Islands 	OCEANIA                            	21388	240
Costa Rica 	LATIN AMER. & CARIB    	4075261	51100
Cote d'Ivoire 	SUB-SAHARAN AFRICA                 	17654843	322460
Croatia 	EASTERN EUROPE                     	4494749	56542
Cuba 	LATIN AMER. & CARIB    	11382820	110860
Cyprus 	NEAR EAST                          	784301	9250
Czech Republic 	EASTERN EUROPE                     	10235455	78866
Denmark 	WESTERN EUROPE                     	5450661	43094
Djibouti 	SUB-SAHARAN AFRICA                 	486530	23000
Dominica 	LATIN AMER. & CARIB    	68910	754
Dominican Republic 	LATIN AMER. & CARIB    	9183984	48730
East Timor 	ASIA (EX. NEAR EAST)         	1062777	15007
Ecuador 	LATIN AMER. & CARIB    	13547510	283560
Egypt 	NORTHERN AFRICA                    	78887007	1001450
El Salvador 	LATIN AMER. & CARIB    	6822378	21040
Equatorial Guinea 	SUB-SAHARAN AFRICA                 	540109	28051
Eritrea 	SUB-SAHARAN AFRICA                 	4786994	121320
Estonia 	BALTICS                            	1324333	45226
Ethiopia 	SUB-SAHARAN AFRICA                 	74777981	1127127
Faroe Islands 	WESTERN EUROPE                     	47246	1399
Fiji 	OCEANIA                            	905949	18270
Finland 	WESTERN EUROPE                     	5231372	338145
France 	WESTERN EUROPE                     	60876136	547030
French Guiana 	LATIN AMER. & CARIB    	199509	91000
French Polynesia 	OCEANIA                            	274578	4167
Gabon 	SUB-SAHARAN AFRICA                 	1424906	267667
Gambia, The 	SUB-SAHARAN AFRICA                 	1641564	11300
Gaza Strip 	NEAR EAST                          	1428757	360
Georgia 	C.W. OF IND. STATES 	4661473	69700
Germany 	WESTERN EUROPE                     	82422299	357021
Ghana 	SUB-SAHARAN AFRICA                 	22409572	239460
Gibraltar 	WESTERN EUROPE                     	27928	7
Greece 	WESTERN EUROPE                     	10688058	131940
Greenland 	NORTHERN AMERICA                   	56361	2166086
Grenada 	LATIN AMER. & CARIB    	89703	344
Guadeloupe 	LATIN AMER. & CARIB    	452776	1780
Guam 	OCEANIA                            	171019	541
Guatemala 	LATIN AMER. & CARIB    	12293545	108890
Guernsey 	WESTERN EUROPE                     	65409	78
Guinea 	SUB-SAHARAN AFRICA                 	9690222	245857
Guinea-Bissau 	SUB-SAHARAN AFRICA                 	1442029	36120
Guyana 	LATIN AMER. & CARIB    	767245	214970
Haiti 	LATIN AMER. & CARIB    	8308504	27750
Honduras 	LATIN AMER. & CARIB    	7326496	112090
Hong Kong 	ASIA (EX. NEAR EAST)         	6940432	1092
Hungary 	EASTERN EUROPE                     	9981334	93030
Iceland 	WESTERN EUROPE                     	299388	103000
India 	ASIA (EX. NEAR EAST)         	1095351995	3287590
Indonesia 	ASIA (EX. NEAR EAST)         	245452739	1919440
Iran 	ASIA (EX. NEAR EAST)         	68688433	1648000
Iraq 	NEAR EAST                          	26783383	437072
Ireland 	WESTERN EUROPE                     	4062235	70280
Isle of Man 	WESTERN EUROPE                     	75441	572
Israel 	NEAR EAST                          	6352117	20770
Italy 	WESTERN EUROPE                     	58133509	301230
Jamaica 	LATIN AMER. & CARIB    	2758124	10991
Japan 	ASIA (EX. NEAR EAST)         	127463611	377835
Jersey 	WESTERN EUROPE                     	91084	116
Jordan 	NEAR EAST                          	5906760	92300
Kazakhstan 	C.W. OF IND. STATES 	15233244	2717300
Kenya 	SUB-SAHARAN AFRICA                 	34707817	582650
Kiribati 	OCEANIA                            	105432	811
Korea, North 	ASIA (EX. NEAR EAST)         	23113019	120540
Korea, South 	ASIA (EX. NEAR EAST)         	48846823	98480
Kuwait 	NEAR EAST                          	2418393	17820
Kyrgyzstan 	C.W. OF IND. STATES 	5213898	198500
Laos 	ASIA (EX. NEAR EAST)         	6368481	236800
Latvia 	BALTICS                            	2274735	64589
Lebanon 	NEAR EAST                          	3874050	10400
Lesotho 	SUB-SAHARAN AFRICA                 	2022331	30355
Liberia 	SUB-SAHARAN AFRICA                 	3042004	111370
Libya 	NORTHERN AFRICA                    	5900754	1759540
Liechtenstein 	WESTERN EUROPE                     	33987	160
Lithuania 	BALTICS                            	3585906	65200
Luxembourg 	WESTERN EUROPE                     	474413	2586
Macau 	ASIA (EX. NEAR EAST)         	453125	28
Macedonia 	EASTERN EUROPE                     	2050554	25333
Madagascar 	SUB-SAHARAN AFRICA                 	18595469	587040
Malawi 	SUB-SAHARAN AFRICA                 	13013926	118480
Malaysia 	ASIA (EX. NEAR EAST)         	24385858	329750
Maldives 	ASIA (EX. NEAR EAST)         	359008	300
Mali 	SUB-SAHARAN AFRICA                 	11716829	1240000
Malta 	WESTERN EUROPE                     	400214	316
Marshall Islands 	OCEANIA                            	60422	11854
Martinique 	LATIN AMER. & CARIB    	436131	1100
Mauritania 	SUB-SAHARAN AFRICA                 	3177388	1030700
Mauritius 	SUB-SAHARAN AFRICA                 	1240827	2040
Mayotte 	SUB-SAHARAN AFRICA                 	201234	374
Mexico 	LATIN AMER. & CARIB    	107449525	1972550
Micronesia, Fed. St. 	OCEANIA                            	108004	702
Moldova 	C.W. OF IND. STATES 	4466706	33843
Monaco 	WESTERN EUROPE                     	32543	2
Mongolia 	ASIA (EX. NEAR EAST)         	2832224	1564116
Montserrat 	LATIN AMER. & CARIB    	9439	102
Morocco 	NORTHERN AFRICA                    	33241259	446550
Mozambique 	SUB-SAHARAN AFRICA                 	19686505	801590
Namibia 	SUB-SAHARAN AFRICA                 	2044147	825418
Nauru 	OCEANIA                            	13287	21
Nepal 	ASIA (EX. NEAR EAST)         	28287147	147181
Netherlands 	WESTERN EUROPE                     	16491461	41526
Netherlands Antilles 	LATIN AMER. & CARIB    	221736	960
New Caledonia 	OCEANIA                            	219246	19060
New Zealand 	OCEANIA                            	4076140	268680
Nicaragua 	LATIN AMER. & CARIB    	5570129	129494
Niger 	SUB-SAHARAN AFRICA                 	12525094	1267000
Nigeria 	SUB-SAHARAN AFRICA                 	131859731	923768
N. Mariana Islands 	OCEANIA                            	82459	477
Norway 	WESTERN EUROPE                     	4610820	323802
Oman 	NEAR EAST                          	3102229	212460
Pakistan 	ASIA (EX. NEAR EAST)         	165803560	803940
Palau 	OCEANIA                            	20579	458
Panama 	LATIN AMER. & CARIB    	3191319	78200
Papua New Guinea 	OCEANIA                            	5670544	462840
Paraguay 	LATIN AMER. & CARIB    	6506464	406750
Peru 	LATIN AMER. & CARIB    	28302603	1285220
Philippines 	ASIA (EX. NEAR EAST)         	89468677	300000
Poland 	EASTERN EUROPE                     	38536869	312685
Portugal 	WESTERN EUROPE                     	10605870	92391
Puerto Rico 	LATIN AMER. & CARIB    	3927188	13790
Qatar 	NEAR EAST                          	885359	11437
Reunion 	SUB-SAHARAN AFRICA                 	787584	2517
Romania 	EASTERN EUROPE                     	22303552	237500
Russia 	C.W. OF IND. STATES 	142893540	17075200
Rwanda 	SUB-SAHARAN AFRICA                 	8648248	26338
Saint Helena 	SUB-SAHARAN AFRICA                 	7502	413
Saint Kitts & Nevis 	LATIN AMER. & CARIB    	39129	261
Saint Lucia 	LATIN AMER. & CARIB    	168458	616
St Pierre & Miquelon 	NORTHERN AMERICA                   	7026	242
Saint Vincent and the Grenadines 	LATIN AMER. & CARIB    	117848	389
Samoa 	OCEANIA                            	176908	2944
San Marino 	WESTERN EUROPE                     	29251	61
Sao Tome & Principe 	SUB-SAHARAN AFRICA                 	193413	1001
Saudi Arabia 	NEAR EAST                          	27019731	1960582
Senegal 	SUB-SAHARAN AFRICA                 	11987121	196190
Serbia 	EASTERN EUROPE                     	9396411	88361
Seychelles 	SUB-SAHARAN AFRICA                 	81541	455
Sierra Leone 	SUB-SAHARAN AFRICA                 	6005250	71740
Singapore 	ASIA (EX. NEAR EAST)         	4492150	693
Slovakia 	EASTERN EUROPE                     	5439448	48845
Slovenia 	EASTERN EUROPE                     	2010347	20273
Solomon Islands 	OCEANIA                            	552438	28450
Somalia 	SUB-SAHARAN AFRICA                 	8863338	637657
South Africa 	SUB-SAHARAN AFRICA                 	44187637	1219912
Spain 	WESTERN EUROPE                     	40397842	504782
Sri Lanka 	ASIA (EX. NEAR EAST)         	20222240	65610
Sudan 	SUB-SAHARAN AFRICA                 	41236378	2505810
Suriname 	LATIN AMER. & CARIB    	439117	163270
Swaziland 	SUB-SAHARAN AFRICA                 	1136334	17363
Sweden 	WESTERN EUROPE                     	9016596	449964
Switzerland 	WESTERN EUROPE                     	7523934	41290
Syria 	NEAR EAST                          	18881361	185180
Taiwan 	ASIA (EX. NEAR EAST)         	23036087	35980
Tajikistan 	C.W. OF IND. STATES 	7320815	143100
Tanzania 	SUB-SAHARAN AFRICA                 	37445392	945087
Thailand 	ASIA (EX. NEAR EAST)         	64631595	514000
Togo 	SUB-SAHARAN AFRICA                 	5548702	56785
Tonga 	OCEANIA                            	114689	748
Trinidad & Tobago 	LATIN AMER. & CARIB    	1065842	5128
Tunisia 	NORTHERN AFRICA                    	10175014	163610
Turkey 	NEAR EAST                          	70413958	780580
Turkmenistan 	C.W. OF IND. STATES 	5042920	488100
Turks & Caicos Is 	LATIN AMER. & CARIB    	21152	430
Tuvalu 	OCEANIA                            	11810	26
Uganda 	SUB-SAHARAN AFRICA                 	28195754	236040
Ukraine 	C.W. OF IND. STATES 	46710816	603700
United Arab Emirates 	NEAR EAST                          	2602713	82880
United Kingdom 	WESTERN EUROPE                     	60609153	244820
United States 	NORTHERN AMERICA                   	298444215	9631420
Uruguay 	LATIN AMER. & CARIB    	3431932	176220
Uzbekistan 	C.W. OF IND. STATES 	27307134	447400
Vanuatu 	OCEANIA                            	208869	12200
Venezuela 	LATIN AMER. & CARIB    	25730435	912050
Vietnam 	ASIA (EX. NEAR EAST)         	84402966	329560
Virgin Islands 	LATIN AMER. & CARIB    	108605	1910
Wallis and Futuna 	OCEANIA                            	16025	274
West Bank 	NEAR EAST                          	2460492	5860
Western Sahara 	NORTHERN AFRICA                    	273008	266000
Yemen 	NEAR EAST                          	21456188	527970
Zambia 	SUB-SAHARAN AFRICA                 	11502010	752614
Zimbabwe 	SUB-SAHARAN AFRICA                 	12236805	390580`;