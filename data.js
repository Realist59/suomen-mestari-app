const bookData = {
    "1": {
        "title": "Kappale 1",
        "pages": [
            // СТРАНИЦА 1
            `
            <h1 style="color: #005a9c; font-size: 24px; margin-bottom: 15px;">Hei ja tervetuloa!</h1>
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 10px;">Kurssi on kello 18-20.</p>
            <ul style="margin-bottom: 20px; padding-left: 20px; color: #333; font-size: 15px; line-height: 1.5;">
                <li>tutustuminen</li><li>tervehdykset</li><li>viikonpäivät</li><li>aakkoset</li>
                <li>numerot</li><li>ääntäminen: vokaalit</li><li>vokaaliharmonia</li><li>olla-verbi</li>
            </ul>
            <div class="dialogue" style="font-size: 16px; line-height: 1.6;">
                <p style="margin-bottom: 8px;"><b>Alex:</b> Anteeksi, onko täällä suomen kurssi?</p>
                <p style="margin-bottom: 8px;"><b>Olga:</b> Joo, on. Tämä on Suomi 1.</p>
                <p style="margin-bottom: 8px;"><b>Alex:</b> Hyvä. Onko tämä paikka vapaa?</p>
                <p style="margin-bottom: 8px;"><b>Olga:</b> On.</p>
                <p style="margin-bottom: 8px;"><b>Alex:</b> Kiva. Hei, minä olen Alex. Kuka sinä olet?</p>
                <p style="margin-bottom: 8px;"><b>Olga:</b> Minä olen Olga. Hauska tutustua!</p>
                <p style="margin-bottom: 8px;"><b>Alex:</b> Kiitos samoin!</p>
            </div>
            `,
            // СТРАНИЦА 2
            `
            <div class="dialogue" style="font-size: 16px; line-height: 1.6;">
                <p style="margin-bottom: 8px;"><b>Pedro:</b> Moi Olga! Mitä kuuluu?</p>
                <p style="margin-bottom: 8px;"><b>Olga:</b> Terve Pedro! Kiitos, minulle kuuluu hyvää. Entä sinulle?</p>
                <p style="margin-bottom: 8px;"><b>Pedro:</b> Ihan hyvää, kiitos.</p>
                <p style="margin-bottom: 8px;"><b>Olga:</b> Alex, tässä on Pedro.</p>
                <p style="margin-bottom: 8px;"><b>Alex:</b> Hei Pedro. Minun nimi on Alex. Hauska tutustua!</p>
                <p style="margin-bottom: 8px;"><b>Pedro:</b> Hauska tutustua!</p>
            </div>
            <div class="dialogue" style="font-size: 16px; line-height: 1.6; margin-top: 20px;">
                <p style="margin-bottom: 8px;"><b>Opettaja:</b> Hei ja tervetuloa suomen kurssille! Tämä kurssi on Suomi 1 ja minä olen opettaja. Minun nimi on Päivi Koskela.</p>
                <p style="margin-bottom: 8px;"><b>Alex:</b> Anteeksi, miten se kirjoitetaan?</p>
                <p style="margin-bottom: 8px;"><b>Opettaja:</b> Minun etunimi kirjoitetaan P-Ä-I-V-I ja sukunimi K-O-S-K-E-L-A.</p>
                <p style="margin-bottom: 8px;"><b>Alex:</b> Okei, kiitos.</p>
                <p style="margin-bottom: 8px;"><b>Opettaja:</b> Kurssipäivät ovat maanantai, keskiviikko ja torstai. Kurssi on kello 18-20.</p>
            </div>
            `,
            // СТРАНИЦА 3 (Только финский словарь)
            `
            <h2 style="color: #005a9c; font-size: 22px; margin-bottom: 15px;">Sanasto</h2>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 15px; line-height: 1.5;">
                <p>Hei!</p><p>ja</p>
                <p>Tervetuloa!</p><p>Anteeksi!</p>
                <p>onko</p><p>täällä</p>
                <p>suomen kurssi</p><p>joo</p>
                <p>olla</p><p>tämä</p>
                <p>paikka</p><p>vapaa</p>
                <p>kiva</p><p>minä</p>
                <p>kuka</p><p>Mitä kuuluu?</p>
                <p>Terve!</p><p>Kiitos!</p>
                <p>Minulle kuuluu hyvää.</p><p>Entä sinulle?</p>
                <p>Ihan hyvää, kiitos.</p><p>tässä</p>
                <p>minun</p><p>nimi</p>
                <p>opettaja</p><p>Miten se kirjoitetaan?</p>
                <p>etunimi</p><p>sukunimi</p>
                <p>okei</p><p>kurssipäivä</p>
                <p>sinä</p><p>Hauska tutustua!</p>
                <p>Kiitos samoin!</p><p>Moi!</p>
                <p>maanantai</p><p>keskiviikko</p>
                <p>torstai</p><p>kello</p>
            </div>
            `,
            // СТРАНИЦА 4
            `
            <h2 style="color: #005a9c; font-size: 22px; margin-bottom: 15px;">Fraasit</h2>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 15px; line-height: 1.5;">
                <p>Hyvää huomenta!</p><p>Iltaa!</p>
                <p>Huomenta!</p><p>Päivää!</p>
                <p>Hyvää päivää!</p><p>Hyvää iltaa!</p>
                <p>Hyvää yötä!</p><p>Nuku hyvin!</p>
                <p>Hei hei!</p><p>Nähdään!</p>
                <p>Moi moi!</p><p>Heippa!</p>
                <p>Näkemiin!</p><p>Ole hyvä!</p>
                <p>Joo.</p><p>Ei kestä!</p>
                <p>Ei.</p><p>Kyllä.</p>
                <p>Nähdään huomenna!</p><p>Moikka!</p>
                <p>Tervetuloa!</p><p>Anteeksi!</p>
                <p>Ei se mitään!</p><p>Kiitos!</p>
                <p>Hyvää ruokahalua!</p><p>Kiitos ruoasta!</p>
                <p>Kiitos, oli hyvää.</p><p>Kippis!</p>
                <p>Skool!</p>
            </div>
            `,
            // СТРАНИЦА 5
            `
            <h2 style="color: #005a9c; font-size: 22px; margin-bottom: 15px;">Viikonpäivät</h2>
            <p style="font-size: 16px; margin-bottom: 10px; font-style: italic;">Mikä päivä tänään on?</p>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 15px; line-height: 1.5;">
                <p>maanantai (ma)</p><p>maanantaina</p>
                <p>tiistai (ti)</p><p>tiistaina</p>
                <p>keskiviikko (ke)</p><p>keskiviikkona</p>
                <p>torstai (to)</p><p>torstaina</p>
                <p>perjantai (pe)</p><p>perjantaina</p>
                <p>lauantai (la)</p><p>lauantaina</p>
                <p>sunnuntai (su)</p><p>sunnuntaina</p>
                <p>viikonloppu (la ja su)</p><p>viikonloppuna</p>
            </div>
            <p style="margin-top: 20px; font-size: 16px; line-height: 1.6;">
                toissapäivänä<br>
                eilen<br>
                TÄNÄÄN<br>
                huomenna<br>
                ylihuomenna
            </p>
            <p style="margin-top: 20px; font-size: 16px;"><b>Milloin?</b></p>
            `,
            // СТРАНИЦА 6
            `
            <h2 style="color: #005a9c; font-size: 22px; margin-bottom: 15px;">Aakkoset</h2>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; font-size: 16px; line-height: 1.5; text-align: center;">
                <div><b>A</b> [aa]</div><div><b>B</b> [bee]</div><div><b>C</b> [see]</div>
                <div><b>D</b> [dee]</div><div><b>E</b> [ee]</div><div><b>F</b> [äf]</div>
                <div><b>G</b> [gee]</div><div><b>H</b> [hoo]</div><div><b>I</b> [ii]</div>
                <div><b>J</b> [jii]</div><div><b>K</b> [koo]</div><div><b>L</b> [äl]</div>
                <div><b>M</b> [äm]</div><div><b>N</b> [än]</div><div><b>O</b> [oo]</div>
                <div><b>P</b> [pee]</div><div><b>Q</b> [kuu]</div><div><b>R</b> [är]</div>
                <div><b>S</b> [äs]</div><div><b>T</b> [tee]</div><div><b>U</b> [uu]</div>
                <div><b>V</b> [vee]</div><div><b>W</b> [kaksois-vee]</div><div><b>X</b> [äks]</div>
                <div><b>Y</b> [yy]</div><div><b>Z</b> [tseta]</div><div><b>Å</b> [ruotsalainen oo]</div>
                <div><b>Ä</b> [ää]</div><div><b>Ö</b> [öö]</div>
            </div>
            `,
            // СТРАНИЦА 7
            `
            <h2 style="color: #005a9c; font-size: 22px; margin-bottom: 15px;">Numerot</h2>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 16px; line-height: 1.5;">
                <p>0 nolla</p><p>10 kymmenen</p>
                <p>1 yksi</p><p>11 yksitoista</p>
                <p>2 kaksi</p><p>12 kaksitoista</p>
                <p>3 kolme</p><p>13 kolmetoista</p>
                <p>4 neljä</p><p>14 neljätoista</p>
                <p>5 viisi</p><p>15 viisitoista</p>
                <p>6 kuusi</p><p>16 kuusitoista</p>
                <p>7 seitsemän</p><p>17 seitsemäntoista</p>
                <p>8 kahdeksan</p><p>18 kahdeksantoista</p>
                <p>9 yhdeksän</p><p>19 yhdeksäntoista</p>
                <p>20 kaksikymmentä</p><p>100 sata</p>
                <p>21 kaksikymmentäyksi</p><p>1000 tuhat</p>
                <p>30 kolmekymmentä</p><p>1 000 000 miljoona</p>
            </div>
            `,
            // СТРАНИЦА 8
            `
            <h2 style="color: #005a9c; font-size: 22px; margin-bottom: 15px;">Kielioppi: Persoonapronominit ja olla-verbi</h2>
            <table style="width: 100%; border-collapse: collapse; font-size: 16px; line-height: 1.6; text-align: left; margin-bottom: 20px;">
                <tr style="border-bottom: 2px solid #005a9c;">
                    <th style="padding: 8px;">Persoonapronomini</th>
                    <th style="padding: 8px;">Olla-verbi</th>
                </tr>
                <tr style="border-bottom: 1px solid #eee;"><td style="padding: 8px;">minä</td><td style="padding: 8px;">olen</td></tr>
                <tr style="border-bottom: 1px solid #eee;"><td style="padding: 8px;">sinä</td><td style="padding: 8px;">olet</td></tr>
                <tr style="border-bottom: 1px solid #eee;"><td style="padding: 8px;">hän / se</td><td style="padding: 8px;">on</td></tr>
                <tr style="border-bottom: 1px solid #eee;"><td style="padding: 8px;">me</td><td style="padding: 8px;">olemme</td></tr>
                <tr style="border-bottom: 1px solid #eee;"><td style="padding: 8px;">te</td><td style="padding: 8px;">olette</td></tr>
                <tr><td style="padding: 8px;">he / ne</td><td style="padding: 8px;">ovat</td></tr>
            </table>
            <h3 style="color: #005a9c; margin-bottom: 10px;">Puhekieli</h3>
            <p style="font-size: 16px; line-height: 1.6;">
                mä oon<br>sä oot<br>se on<br>me ollaan<br>te ootte<br>ne on
            </p>
            `,
            // СТРАНИЦА 9
            `
            <h2 style="color: #005a9c; font-size: 22px; margin-bottom: 15px;">Ääntäminen: vokaalit</h2>
            <div style="font-size: 16px; line-height: 1.8;">
                <p><b>a</b> — sana, <b>aa</b> — aamu</p><p><b>e</b> — terve, <b>ee</b> — anteeksi</p>
                <p><b>i</b> — tili, <b>ii</b> — tiili</p><p><b>o</b> — ovi, <b>oo</b> — koodi</p>
                <p><b>u</b> — tuli, <b>uu</b> — tuuli</p><p><b>y</b> — hyvä, <b>yy</b> — tyyli</p>
                <p><b>ä</b> — päivä, <b>ää</b> — päivää</p><p><b>ö</b> — söpö, <b>öö</b> — insinööri</p>
            </div>
            `,
            // СТРАНИЦА 10
            `
            <h2 style="color: #005a9c; font-size: 22px; margin-bottom: 15px;">Vokaaliharmonia</h2>
            <div style="display: flex; gap: 20px; margin-bottom: 20px;">
                <div style="flex: 1; background: #eef4fa; padding: 15px; border-radius: 8px;">
                    <h3 style="color: #005a9c; margin-bottom: 10px;">a, o, u</h3>
                    <p>auto<br>tutustua<br>hauska</p>
                </div>
                <div style="flex: 1; background: #fdf2f2; padding: 15px; border-radius: 8px;">
                    <h3 style="color: #9c0000; margin-bottom: 10px;">ä, ö, y</h3>
                    <p>hyvä<br>säästää<br>yö</p>
                </div>
            </div>
            <p style="font-size: 16px; line-height: 1.6;">e, i</p>
            <p style="font-size: 16px; line-height: 1.6; margin-top: 10px;"><b>tie, sinä, anteeksi, kurssi, kieli, päivä</b>.</p>
            `,
            // СТРАНИЦА 11
            `
            <h2 style="color: #005a9c; font-size: 22px; margin-bottom: 15px;">Yhdyssanat</h2>
            <ul style="font-size: 16px; line-height: 1.8; padding-left: 20px;">
                <li>suklaajäätelö + ssa/ssä → suklaajäätelössä</li>
                <li>jäätelökioski + lla/llä → jäätelökioskilla</li>
            </ul>
            <h3 style="color: #005a9c; margin-top: 20px; margin-bottom: 10px;">Harjoitus 1. Ääntäminen: vokaalit. Kuuntele ja lue.</h3>
            <div style="font-size: 16px; line-height: 1.8; columns: 2;">
                <p>a - aa</p><p>ma - maa</p><p>sa - saa</p><p>ä - ää</p><p>mä - mää</p><p>sä - sää</p>
                <p>o - oo</p><p>mo - moo</p><p>ko - koo</p><p>e - ee</p><p>me - mee</p><p>te - tee</p>
            </div>
            `,
            // СТРАНИЦА 12
            `
            <h2 style="color: #005a9c; font-size: 22px; margin-bottom: 15px;">Harjoitus 2</h2>
            <p style="font-size: 16px; margin-bottom: 15px;">Ääntäminen: lyhyt ja pitkä vokaali. Kuuntele ja lue.</p>
            <div style="font-size: 16px; line-height: 1.8; columns: 2;">
                <p>papa - paapa</p><p>tapa - taapa</p><p>nama - naama</p><p>tätä - täätä</p>
                <p>näpä - nääpä</p><p>lätä - läätä</p><p>koko - kooko</p><p>sopo - soopo</p>
                <p>teti - teeti</p><p>leli - leeli</p><p>lopo - loopo</p><p>sepi - seepi</p>
                <p>pöpö - pööpö</p><p>töpö - tööpö</p><p>nökö - nöökö</p><p>tutu - tuutu</p>
                <p>titi - tiiti</p><p>kyny - kyyny</p><p>mupu - muupu</p><p>kiki - kiiki</p>
                <p>syny - syyny</p><p>kuru - kuuru</p><p>mimi - miimi</p><p>ryny - ryyny</p>
            </div>
            `,
            // СТРАНИЦА 13
            `
            <h2 style="color: #005a9c; font-size: 22px; margin-bottom: 15px;">Harjoitus 3</h2>
            <p style="font-size: 16px; margin-bottom: 15px;">Ääntäminen: lyhyt ja pitkä vokaali. Kuuntele ja lue.</p>
            <div style="font-size: 16px; line-height: 1.8; columns: 2;">
                <p>naka - nakaa</p><p>tapa - tapaa</p><p>sata - sataa</p><p>säkä - säkää</p>
                <p>pälä - pälää</p><p>mätä - mätää</p><p>moko - mokoo</p><p>teke - tekee</p>
                <p>soto - sotoo</p><p>lopo - lopoo</p><p>pese - pesee</p><p>mene - menee</p>
                <p>löpö - löpöö</p><p>kökö - kököö</p><p>nösö - nösöö</p><p>luku - lukuu</p>
                <p>tulu - tuluu</p><p>mini - minii</p><p>kiri - kirii</p><p>syty - sytyy</p>
                <p>muru - muruu</p><p>sipi - sipii</p><p>pysy - pysyy</p><p>kysy - kysyy</p>
            </div>
            `,
            // СТРАНИЦА 14
            `
            <h2 style="color: #005a9c; font-size: 22px; margin-bottom: 15px;">Harjoitus 4. Vokaaliharmonia</h2>
            <p style="font-size: 16px; margin-bottom: 15px;"><b>A.</b> Etsi ja kirjoita a-o-u-sanat ja ä-ö-y-sanat.</p>
            <p style="font-size: 16px; line-height: 1.8;">
                pouta, ylös, tyhmä, tyyli, pelätä, hella, nuori, hellä, tuuli, nyöri, pöytä, tuo, kylmä, pelata, kulma, tuhma, ulos, työ
            </p>
            <div style="display: flex; gap: 20px; margin-top: 20px;">
                <div style="flex: 1; background: #eef4fa; padding: 15px; border-radius: 8px;">
                    <h3 style="color: #005a9c; margin-bottom: 10px;">a-o-u-sanat:</h3><p>pouta, ...</p>
                </div>
                <div style="flex: 1; background: #fdf2f2; padding: 15px; border-radius: 8px;">
                    <h3 style="color: #9c0000; margin-bottom: 10px;">ä-ö-y-sanat:</h3><p>ylös, ...</p>
                </div>
            </div>
            `,
            // СТРАНИЦА 15
            `
            <h2 style="color: #005a9c; font-size: 22px; margin-bottom: 15px;">Harjoitus 5. Ääntäminen: vokaalit</h2>
            <p style="font-size: 16px; margin-bottom: 15px;">Kuuntele ja valitse: A vai B?</p>
            <div style="font-size: 16px; line-height: 1.8; columns: 2;">
                <p>1. kuu | kyy</p><p>2. ala | älä</p><p>3. tukki | tykki</p><p>4. hullu | hylly</p>
                <p>5. soisi | söisi</p><p>6. takki | täkki</p><p>7. suo | syö</p><p>8. tai | täi</p>
                <p>9. huppu | hyppy</p><p>10. tuo | työ</p><p>11. saari | sääri</p><p>12. tulli | tylli</p>
                <p>13. passi | pässi</p><p>14. ratti | rätti</p>
            </div>
            `,
            // СТРАНИЦА 16
            `
            <h2 style="color: #005a9c; font-size: 22px; margin-bottom: 15px;">Harjoitus 6. Vokaaliharmonia</h2>
            <p style="font-size: 16px; margin-bottom: 15px;"><b>A.</b> Tuleeko ssa vai ssä?</p>
            <p style="font-size: 16px; line-height: 1.8;">
                Minä asun... + ssa / ssä<br>8. Vaasassa<br>9. Jyväskylä<br>10. Kotka<br>11. Kouvola<br>12. Mäntsälä<br>13. Pori<br>14. Ii<br>15. Mikkeli
            </p>
            <p style="font-size: 16px; margin-bottom: 15px; margin-top: 20px;"><b>B.</b> Tuleeko a vai ä?</p>
            <p style="font-size: 16px; line-height: 1.8;">
                Minä haluan... + a / ä<br>16. kahvia<br>17. maito<br>18. jäätelö<br>19. kakku<br>20. sokeri<br>21. keksi<br>22. pulla<br>23. mehu
            </p>
            `,
            // СТРАНИЦА 17
            `
            <h2 style="color: #005a9c; font-size: 22px; margin-bottom: 15px;">Harjoitus 7-8</h2>
            <p style="font-size: 16px; margin-bottom: 15px;"><b>Harjoitus 7. Kirjoita fraasit.</b></p>
            <p style="font-size: 16px; line-height: 1.8;">Minä etsin pöytälamppua. (1. ... 5. ...)</p>
            <p style="font-size: 16px; margin-bottom: 15px; margin-top: 20px;"><b>Harjoitus 8. Yhdistä.</b></p>
            <ol style="font-size: 16px; line-height: 1.8; padding-left: 20px;">
                <li>Kuka sinä olet? — c. Olen Saija.</li>
                <li>Hauska tutustua! — g. Kiitos samoin!</li>
                <li>Onko täällä suomen kurssi? — e. Joo, on.</li>
                <li>Mitä sinulle kuuluu? — f. Hyvää kiitos!</li>
                <li>Mikä päivä tänään on? — d. Tänään on tiistai.</li>
                <li>Tässä on Miriam. — a. Hauska tutustua!</li>
                <li>Miten se kirjoitetaan? — b. S-A-A-R-A R-E-H-U-L-A.</li>
            </ol>
            `,
            // СТРАНИЦА 18
            `
            <h2 style="color: #005a9c; font-size: 22px; margin-bottom: 15px;">Harjoitus 9-22</h2>
            <p style="font-size: 16px; line-height: 1.8; margin-bottom: 15px;"><b>Harjoitus 9. Kirjoita kysymys.</b></p>
            <p style="font-size: 16px; line-height: 1.8;">
                1. Kuka sinä olet? — Minä olen Jaakko.<br>2. Mitä kuuluu? — Kiitos hyvää.<br>
                3. Miten sinun nimi kirjoitetaan? — P-A-A-V-O S-U-U-R-O-N-E-N.<br>
                4. Kuinka vanha sinä olet? — Olen 43.
            </p>
            <p style="font-size: 16px; line-height: 1.8; margin-top: 20px;"><b>Harjoitus 17. Kirjoita viikonpäivä.</b></p>
            <p style="font-size: 16px; line-height: 1.8;">
                Tänään on maanantai.<br>1. Huomenna on tiistai.<br>2. Ylihuomenna on keskiviikko.<br>3. Eilen oli sunnuntai.<br>4. Toissapäivänä oli lauantai.
            </p>
            `
        ]
    }
};