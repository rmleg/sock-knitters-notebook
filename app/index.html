<!DOCTYPE html>
<html lang="en" ng-app="sknApp">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
        <title>Sock Knitter's Notebook</title>

        <!-- Bootstrap -->
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" href="css/app.css">
        <!--- include angular.js in head for proper ng-cloak -->
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js"></script>
        <!---<script src="bower_components/angular-route/angular-route.js"></script>-->
        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>
    <body>
        <div class="container">
            <header>
            <a href="http://arbortwist.com" target="_blank">
                <img src="images/arbortwistlogo.png" alt="Arbor Twist logo">
            </a><br>
            <h4>This sock pattern generator is provided for free by <a href="http://arbortwist.com" target="_blank">Arbor Twist</a>.</h4>
            </header>
            <div id="calculator" ng-controller="StitchCalc" class="row {{constrDir}} {{heelType}}">
                <div id="survey" class="col-md-6">
                <h1>Generate a Sock Recipe</h1>
                <p>This page will walk you through building a personalized sock recipe so you can knit perfectly-fitted socks for everyone you know.  This gives you the basic outline of a vanilla sock--trial and error with this as a baseline will help you get that perfect comfy fit.</p>
                <p>Do not refresh the page, or all data will be lost and you will have to start over.</p>
                <h3>Gauge and Size Information</h3>
                <form name="calc-sts">
                    <p>
                        <label>Stitches per inch:
                        </label>
                            <input type="text" ng-model="stsPerIn"></input>
                    </p>
                    <p>
                        <label>Circumference of foot in inches:
                        </label>
                            <input type="text" ng-model="circumference"></input>
                    </p>
                    <p>
                        <label>Length of foot in inches:
                        </label>
                            <input type="text" ng-model="length"></input>
                    </p>
                </form>

                <h3>Construction Information</h3>

                <p><strong>Which direction do you want to knit the socks?</strong></p>
                <form>
                    <p><input type="radio" name="constrDir" value="toeUp" ng-model="constrDir"> Toe Up</input></p>
                    <p><input type="radio" name="constrDir" value="cuffDown" ng-model="constrDir"> Cuff Down</input></p>
                </form>
                <p id="construction" class="hide {{constrDir}}">Your toe-up sock recipe will include a short-row heel.</p>
            
                <div id="heel-choice" class="hide {{constrDir}}">
                    <!--- only show for cuff down -->
                    <p><strong>What kind of heel do you want to use?</strong></p>
                    <form>
                        <p><input type="radio" name="heelType" value="flap" class="top-down-heel" ng-model="heelType"> Heel flap with turn and gusset</input></p>
                        <p><input type="radio" name="heelType" value="shortRow" class="top-down-heel toe-up-heel" ng-model="heelType"> Short row heel</input></p>
                    </form>
                </div><!---#heel-choice-->
            </div><!---#survey-->
            <div id="recipe" class="col-md-6">
                <h3 id="look-here">Your sock recipe will appear here.</h2>
                <div class="hide" id="shared-recipe">
                    <h2>Your Sock Recipe</h2>
                    <p>These instructions are written for the magic loop or two circular needles methods, as they reference the first needle and second needle.  To adapt for dpns, the first needle is dpn one and two and the second needle is dpn three and four.</p>
                    <h3>Abbreviations</h3>
                    <p class="abbrList">k = knit<br />
                    p = purl<br />
                    sl = slip (purlwise unless otherwise specified)<br />
                    <span class="shortRowAbbr">wyib = with yarn in back<br />
                        wyif = with yarn in front<br /></span>
                    <span class="flapAbbr">p2tog = purl two together<br />
                        ssk = <a href="https://www.lionbrand.com/faq/80.html?language=" target="_blank">slip, slip, knit</a><br /></span>
                    <span class="shortRowAbbr">w&amp;t = <a href="http://www.purlsoho.com/create/2008/06/18/short-rows/" target="_blank">wrap and turn</a><br /></span>
                    <span class="toeUpAbbr">RLI = <a href="http://www.twistcollective.com/collection/component/content/article/92-how-to/1047-lifted-increase-lli-rli" target="_blank">right-leaning lifted increase</a><br />
                        LLI = <a href="http://www.twistcollective.com/collection/component/content/article/92-how-to/1047-lifted-increase-lli-rli" target="_blank">left-leaning lifted increase</a><br /></span>
                    RS = right side<br />WS = wrong side<br />
                    BOR = beginning of round</p>
                    <p class="toeUpAbbr">Feel free to substitute your preferred directional increases for RLI and LLI.  Those are just my favorite increases for toes.</p>
                </div><!---#shared-recipe-->

                <div class="hide" id="cuff-down-recipe">
                    <h3>Cuff and Leg</h3>
                    <p>Cast on {{saveNeedSts(stsPerIn, circumference, 4)}} stitches loosely or with a stretchy cast-on. Join to work in the round, being careful not to twist.</p>
                    <p>Round 1: [k2, p2] around<br />
                    Repeat round 1 until ribbing measures one inch, or until desired length.</p>
                    <p>Knit every row until work measures {{legLength(heelType)}} inches, or until desired length.</p>
                    <h3>Heel</h3>
                    <div class="hide" id="flapInstructions">
                        <h4>Heel Flap</h4>
                        <p>This flap uses a slip-stitch heel stitch.  Feel free to substitute any stitch pattern, as long as the length ends up the same.  One suggestion is the <a href="http://www.haveayarn.ca/stitch/03_2009_stitch_of_the_month.htm" target="_blank">eye of partridge heel stitch</a>.</p>
                        <p>The flap is worked flat over the next {{saveNeedSts(stsPerIn, circumference, 4) / 2}} stitches.</p>
                        <p>Row 1 (RS): [k1, sl1 wyib] repeat to end<br />
                        Row 2 (WS): p to last stich, sl1 wyif
                        </p>
                        <p>Repeat rows 1 and 2 {{(saveNeedSts(stsPerIn, circumference, 4) / 8) - 1 | number:0 }} more times, or until flap is length desired, ending after a RS row.</p>

                        <h4>Heel Turn</h4>
                        <p>Row 1 (WS): p{{(saveNeedSts(stsPerIn, circumference, 4) / 4) + 2}}, p2tog, p1, turn<br />
                        Row 2 (RS): sl1 wyib, k5, ssk, k1, turn<br />
                        Row 3 (WS): sl1 wyif, p to one stitch before gap, p2tog, p1, turn<br />
                        Row 4 (RS): sl1 wyib, k to one stitch before gap, ssk, k1, turn</p>
                        <p>Repeat rows 3 and 4 until all gaps have been closed and all heel stitches have been worked, ending with a RS row.  The last repeats of rows 3 and 4 will not include the final p1 and k1, respectively.</p>

                        <h4>Return to working in the round</h4>
                        <p>Your heel turn has just ended on a RS row. Continue working this RS row in the following manner:
                        <p>
                        Pick up and knit each edge stitch along first side of the heel flap<br />
                        Place marker<br />
                        Knit across the instep (i.e. the stitches you have not been working for the heel)<br />
                        Place marker<br />
                        Pick up and knit each edge stitch along the other side of the heel flap<br />
                        Knit all heel stitches, placing a marker halfway through the heel to mark the beginning of the round, if desired</p>
                        <p>You have now returned all stitches to your needles and are ready to continue working in the round.</p>
                        <h4>Gusset</h4>
                        <p>Row 1: k to 3 sts before marker, k2tog, k1, k across instep (to marker), k1, ssk, k to BOR<br />
                        Row 2: k around</p> 
                        <p>Repeat rows 1 and 2 until the stitch count has returned to {{saveNeedSts(stsPerIn, circumference, 4)}}.</p>
                        <p>Be sure to stay aware of which half of the stitches is your instep and which half is your sole. You will need this information for the toe.</p>
                    </div><!---#flapInstructions-->
                    <div class="hide" id="shortRowInstructions">
                        <p>The short row heel is worked flat over the next {{saveNeedSts(stsPerIn, circumference, 4) / 2}} stitches, which is half your total stitches.  References to the first and last stitches in these instructions refer to the first of this half and the last of this half of your stitches, i.e. the heel stitches.</p>

                        <h4>First half of the heel</h4>
                        <p>Row 1 (RS): k across to last stitch, w&amp;t<br />
                        Row 2 (WS): p back to first stitch, w&amp;t<br />
                        Row 3 (RS): k to stitch before wrapped stitch, w&amp;t<br />
                        Row 4 (WS): p to stitch before wrapped stitch, w&amp;t</p>

                        <p>Repeat rows 3 and 4 until {{saveNeedSts(stsPerIn, circumference, 4) / 6 | floorMult:2 | number:0}} stitches are left unwrapped, ending after a WS row.</p>

                        <h4>Second half of the heel</h4>
                        <p>Row 1 (RS): k to first wrapped stitch, k the wrapped stitch while picking up the wrap, turn<br />
                        Row 2 (WS): sl1 wyif, p to first/next wrapped stitch, p the wrapped stitch while picking up the wrap, turn<br />
                        Row 3 (RS): sl1 wyib, k to next wrapped stitch, k the wrapped stitch while picking up the wrap, turn</p>
                        <p>Repeat rows 2 and 3 until all wraps have been picked up, ending with a RS row.  You are now ready to continue in the round to work the rest of the sock.</p>
                    </div>
                        <h3>Foot</h3>
                        <p>Knit every row until work measures {{length - 2}} inches.</p>

                        <h3>Toe</h3>
                        <p>Knit to the beginning of the instep stitches, then begin the toe decreases as follows:</p>
                        <p>Row 1, instep/needle 1: k1, ssk, k to last 3 sts of instep, k2tog, k1<br />
                        Row 1, sole/needle 2: k1, ssk, k to last 3 sts of sole, k2tog, k1<br />
                        Row 2: k around</p>
                        <p>Repeat rows 1 and 2 until you have {{saveNeedSts(stsPerIn, circumference, 4) / 2 | floorMult:4}} stitches remaining.  Then, repeat row 1 twice more.</p>
                        <p>At the end of your decreases, you should have {{(saveNeedSts(stsPerIn, circumference, 4) / 2) - 8 | floorMult:4}} stitches remaining, {{((saveNeedSts(stsPerIn, circumference, 4) / 2) - 8) / 2 | floorMult:2}} on the instep and {{((saveNeedSts(stsPerIn, circumference, 4) / 2) - 8) / 2 | floorMult:2}} on the sole.</p>
                        <p>Cut the yarn, leaving a tail long enough to graft the toe.  Use the <a href="http://www.knitty.com/ISSUEsummer04/FEATtheresasum04.html" target="_blank">Kitchener stitch</a> to graft the toe closed.</p>

                        <p>
                    </div><!---#cuff-down-recipe-->

                <div class="hide" id="toe-up-recipe">
                    <h3>Toe</h3>
                    <p>Using <a href="http://knitty.com/ISSUEspring06/FEATmagiccaston.html" target="_blank">Judy's Magic Cast On</a>, cast on {{(saveNeedSts(stsPerIn, circumference, 4) / 2) - 8 | floorMult:4}} stitches.</p>
                    <p>Row 1: k1, RLI, k to last stitch of first needle, LLI, k2, RLI, k to last stitch of second needle, LLI, k1<br />
                    Row 2: k around</p>
                    <p>Repeat rows 1 and 2 until you have {{saveNeedSts(stsPerIn, circumference, 4)}} stitches.  <em>For a slightly more rounded toe, try repeating the first row twice before starting to repeat both rows.</em></p>

                    <h3>Foot</h3>
                    <p>Knit every row until work measures {{length - 2}} inches.</p>

                    <h3>Heel</h3>
                    <div class="hide" id="shortRowInstructions">
                        <p>The short row heel is worked flat over the next {{saveNeedSts(stsPerIn, circumference, 4) / 2}} stitches, which is half your total stitches.  References to the first and last stitches in these instructions refer to the first of this half and the last of this half of your stitches, i.e. the heel stitches.</p>

                        <h4>First half of the heel</h4>
                        <p>Row 1 (RS): k across to last stitch, w&amp;t<br />
                        Row 2 (WS): p back to first stitch, w&amp;t<br />
                        Row 3 (RS): k to stitch before wrapped stitch, w&amp;t<br />
                        Row 4 (WS): p to stitch before wrapped stitch, w&amp;t</p>

                        <p>Repeat rows 3 and 4 until {{saveNeedSts(stsPerIn, circumference, 4) / 6 | floorMult:2 | number:0}} stitches are left unwrapped, ending after a WS row.</p>

                        <h4>Second half of the heel</h4>
                        <p>Row 1 (RS): k to first wrapped stitch, k the wrapped stitch while picking up the wrap, turn<br />
                        Row 2 (WS): sl1 wyif, p to first/next wrapped stitch, p the wrapped stitch while picking up the wrap, turn<br />
                        Row 3 (RS): sl1 wyib, k to next wrapped stitch, k the wrapped stitch while picking up the wrap, turn</p>
                        <p>Repeat rows 2 and 3 until all wraps have been picked up, ending with a RS row.  You are now ready to continue in the round to work the rest of the sock.</p>
                    </div>

                    <h3>Leg and Cuff</h3>

                    <p>Knit every row until work measures 7 inches from the top of the heel, or until desired length.</p>

                    <h4>Begin ribbing for the cuff</h4>
                    <p>Round 1: [k2, p2] around<br />
                    Repeat round 1 until ribbing measures one inch, or until desired length.</p>

                    <p>Bind off using a stretchy bind off, such as the <a href="http://www.knitty.com/ISSUEsummer06/FEATsum06TT.html" target="_blank">sewn bind off</a>, my personal favorite.</p>

                </div><!---#toe-up-recipe-->
            </div><!---#recipe-->
        </div><!---#calculator-->
        <hr />
        <!--<h3>Posts about Crafting from the Author's Blog</h3>
            <div id="crafting-posts" class="row"  ng-controller="CraftingPosts" ng-cloak>
                <div class="crafting-post col-md-3" ng-repeat="craftingPost in craftingPosts">
                    <a class="img-link" href="{{craftingPost.link}}" target="_blank"><img src="{{craftingPost._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url}}" alt="{{craftingPost._embedded['wp:featuredmedia'][0].alt_text}}"/></a>
                    <div class="row post-info">
                        <span class="col-md-5 posted-date">{{craftingPost.date | date}}</span>
                        <a class="col-md-7 post-link" href="{{craftingPost.link}}" target="_blank">{{craftingPost.title.rendered}} &raquo;</a>
                    </div>
                </div>
            </div>

            <hr />-->
        <footer>Contact <a href="http://rachelleggett.com" target="_blank">Rachel Leggett</a> with feedback or feature requests, or <a href="https://github.com/rmleg/sock-knitters-notebook" target="_blank">fork this project on GitHub</a>. | <a href="#">Back to Top &uarr;</a></footer>
        </div><!---#container-->

            <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
            <!-- Include all compiled plugins (below), or include individual files as needed -->
            <script src="js/bootstrap.min.js"></script>
            <script src="js/app.js"></script>
            <script src="js/filters.js"></script>
            <script src="view1/view1.js"></script>
            <script src="view2/view2.js"></script>
            <script src="components/version/version.js"></script>
            <script src="components/version/version-directive.js"></script>
            <script src="components/version/interpolate-filter.js"></script>

		<script>
		  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

		  ga('create', 'UA-76871949-2', 'auto');
		  ga('send', 'pageview');

		</script>

        </body>
</html>
