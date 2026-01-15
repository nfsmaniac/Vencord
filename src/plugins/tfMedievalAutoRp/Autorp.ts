/*
 * Vencord, a Discord client mod
 * Copyright (c) 2025 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

const autorp_tf2 = `"autorp.txt"
{
	"prepended_words"
	{
		"Forsooth, " 1
		"I say, " 1
		"I sayeth, " 1
		"Forsooth, I say, " 1
		"Forsooth, say I, " 1
		"Forsooth, sayeth I, " 1
		"Hark! " 1
		"Harketh! " 1
		"By &god, " 1
		"By the Will of &godadj &god, " 1
		"By the &bodyadj &bodypart of the &godadj &god, " 1
		"By &godadj &god's &bodyadj &bodypart, " 1
		"Avast, " 1
		"Zounds, " 1
		"Perchance, " 1
		"Pray tell, " 1
		"Prithee, " 1
		"What hey, " 1
		"What ho, " 1
		"Pray, " 1
		"Surely " 1
		"Pray pardon, " 1
		"Alas, " 1
		"In short, " 1
		"My Lord, "	1
		"My Lady, "	1
		"By my faith, "	1
		"If it pleases you, "	1
		"I pray you, "	1
		"In truth, "	1
		"By my trowth, "	1
		"In sooth, "	1
		"By my word, "	1
		"S'wounds, "	1
		"Z'wounds, "	1
		"&god's wounds, "	1
		"&god's &bodypart, "	1
		"Heigh-ho, "	1
		"Ah, "	1
		"Quoth I, "	1
		"Listen, "	1
		"Listen thee, "	1
		"Hear me, "	1
		"Now hear me, "	1
		"I warrant "	1
		"Come, "	1
		"Kind sire, "	1
		"Sire, "	1
		"There is much in what you say, and yet, "	1
	}

	"appended_words"
	{
		"Anon!" 1
		"Hum." 1
		"Good sir!" 1
		"Good sire!" 1
		"Milady!" 1
		"My Liege!" 1
		"Guvnor!" 1

	}

	"word_replacements"
	{
		"1"
		{
			"prev"	"it"
			"word"	"is"
			"replacement"	"'tis"
		}

		"1"
		{
			"prev"	"it"
			"word"	"was"
			"replacement"	"'twas"
		}

		"1"
		{
			"prev"	"it"
			"word"	"would"
			"replacement"	"'twould"
		}

		"1"
		{
			"prev"	"it"
			"word"	"will"
			"replacement"	"'twill"
		}

		"1"
		{
			"prev"	"it"
			"word"	"were"
			"replacement"	"'twere"
		}

		"1"
		{
			"prev"	"shall"
			"word"	"not"
			"replacement"	"shan't"
		}

		"1"
		{
			"prev"	"will"
			"word"	"not"
			"replacement"	"shan't"
		}

		"1"
		{
			"prev"	"over"
			"word"  "there"
			"replacement"	 "yonder"
		}

		"1"
		{
			"prev" "in"
			word "the"
			chance 2
			"replacement"	"i' the"
		}

		"1"
		{
			"prev" "thank"
			"word" "you"
			"replacement"	"many good thanks to you"
			"replacement"	"thankee"
			"replacement"	"kindly thanks to you"
			"replacement"	"grammercy to you"
		}

		"1"
		{
			"word"	"you"
			"word"	"u"
			"replacement"	 "thou"
			"replacement"	 "thee"
			"replacement"	 "ye"

		}

		"1"
		{
			"word"	"are"
			"replacement"	 "art"

		}

		"1"
		{
			"word"	"god"
			"replacement"	 "Odin"
			"replacement"	 "Bob"
			"replacement"	 "Zeus"
			"replacement"	 "Hera"
			"replacement"	 "Thor"
			"replacement"	 "Crom"
			"replacement"	 "Mad-poet Navarth"
			"replacement"	 "Cugel"
			"replacement"	 "Wotsit"
			"replacement"	 "Baron Boddisey"
			"replacement"	 "Poseidon"
			"replacement"	"Saint Mary"
			"replacement"	"Pallus Athena"
			"replacement"	"Loki"
			"replacement"	"Erlik"
			"replacement"	"Shoggoth"
			"replacement"	"Omm"
			"replacement"	"Vishnu"
			"replacement"	"Azazoth"
			"replacement"	"Father Odin"
			"replacement"	"Allfather Odin"
			"replacement"	"Cthulhu"
			"replacement"	"Buddha"
			"replacement"	"Aphrodite"
			"replacement"	"Isis"
			"replacement"	"Kali"
			"replacement"	"Dionysus"
			"replacement"	"Zarathustra"
			"replacement"	"Croesus"
			"replacement"	"Hermes"
			"replacement"	"Venus"
			"replacement"	"Montezuma"
			"replacement"	"Popacatapetl"
			"replacement"	"Hephaestus"
			"replacement"	"Bubastes"
			"replacement"	"Bacchus"
			"replacement"	"Nebuchadnezzar"
			"replacement"	"Assurbanipal"
			"replacement"	"Sargon"
			"replacement"	"Xerxes"
			"replacement"	"Mulwatallish"
			"replacement"	"Labarna"
			"replacement"	"Hammurabi"
			"replacement"	"Rameses"
			"replacement"	"Minos"
			"replacement"	"Tilgath-Pileser"
			"replacement"	"Vercingetorix"
			"replacement"	"Mithradites"
			"replacement"	"Pericles"
			"replacement"	"Belasarius"
			"replacement"	"Archaemides"
			"replacement"	"Heraclius"
			"replacement"	"Imhotep"
			"replacement"	"Artemis"
			"replacement"	"Orthia"
			"replacement"	"Phoebe"
			"replacement"	"Hestia"
			"replacement"	"Eros"
			"replacement"	"Persephone"
			"replacement"	"Minerva"
			"replacement"	"Mercury"
			"replacement"	"Aesculapius"
			"replacement"	"Discordia"
			"replacement"	"Hecate"
			"replacement"	"Hespera"
		}

		"1"
		{
			"word"	"godadj"
			"replacement"	 "Almighty"
			"replacement"	 "Unthinkable"
			"replacement"	 "Unknowable"
			"replacement"	 "All-knowing"
			"replacement"	 "All-seeing"
			"replacement"	 "Lecherous"
			"replacement"	 "Scandalous"
			"replacement"	 "Merciful"
			"replacement"	 "Ravaging"
			"replacement"	 "Thunderous"
			"replacement"	"Wrathful"
			"replacement"	"Distant"
			"replacement"	"Vengeful"
			"replacement"	"Supreme"
			"replacement"	"Wise"
			"replacement"	"Warlike"
			"replacement"	"Jealous"
			"replacement"	"Vindictive"
			"replacement"	"Powerful"
			"replacement"	"Adulterous"
			"replacement"	"Licentious"
			"replacement"	"Crafty"
			"replacement"	"Benefical"
			"replacement"	"Virtuous"
			"replacement"	"Protective"
			"replacement"	"Prophetic"
			"replacement"	"Bloodthirsty"
			"replacement"	"Murderous"
			"replacement"	"Ruinous"
			"replacement"	"Militant"
			"replacement"	"Invisible"
			"replacement"	"Omnipotent"
			"replacement"	"Forgotten"
			"replacement"	"Enlightened"
			"replacement"	"Tempestuous"
			"replacement"	"Destructive"
			"replacement"	"Grim"
		}

		"1"
		{
			"word"	"bodypart"
			"replacement"	 "Beard"
			"replacement"	 "Third Leg"
			"replacement"	 "Scalp"
			"replacement"	 "Eye"
			"replacement"	 "Thigh"
			"replacement"	 "Arm"
			"replacement"	 "Sword"
			"replacement"	 "Heel"
			"replacement"	 "Gaze"
			"replacement"	 "Tongue"
			"replacement"	 "Hammer"
			"replacement"	 "Toenail"
			"replacement"	 "Nether Regions"
			"replacement"	 "Liver"
			"replacement"	 "Lights"
			"replacement"	 "Spleen"
			"replacement"	 "Gall"
			"replacement"	 "Liver and Lights"
		}

		"1"
		{
			"word"	"bodyadj"
			"replacement"	 "Unknowable"
			"replacement"	 "Unescapable"
			"replacement"	 "Unfathomable"
			"replacement"	 "Unthinkable"
			"replacement"	 "Righteous"
			"replacement"	 "Hairy"
			"replacement"	 "Hairless"
			"replacement"	 "Wandering"
			"replacement"	 "Blistered"
			"replacement"	 "Awe-inspiring"
			"replacement"	 "Toothy"
			"replacement"	 "Ravaged"
			"replacement"	 "Aged"
			"replacement"	 "Endless"
			"replacement"	 "Wondrous"
			"replacement"	"Unavoidable"
			"replacement"	"Pestilent"
			"replacement"	"Forgotten"
			"replacement"	"Beautiful"
			"replacement"	"Fertile"
			"replacement"	"Prophetic"
			"replacement"	"Musical"
			"replacement"	"Helpful"
			"replacement"	"Virginal"
			"replacement"	"Curative"
			"replacement"	"Bleak"
			"replacement"	"Incessant"
			"replacement"	"Sagely"
			"replacement"	"Unfashionable"
			"replacement"	"Unfaltering"
			"replacement"	"Unfamiliar"
			"replacement"	"Abysmal"
			"replacement"	"Boundless"
			"replacement"	"Eternal"
			"replacement"	"Immeasurable"
			"replacement"	"Infinite"
			"replacement"	"Unending"
			"replacement"	"Soundless"
			"replacement"	"Incomprehensible"
			"replacement"	"Inexplicable"
			"replacement"	"Profound"
			"replacement"	"unintelligible"
			"replacement"	"Unbelievable"
			"replacement"	"Impenetrable"
			"replacement"	"Indecipherable"
			"replacement"	"Esoteric"
			"replacement"	"Enigmatic"
			"replacement"	"Ancient"
			"replacement"	"Venerable"
			"replacement"	"Baneful"
			"replacement"	"Contagious"
			"replacement"	"Corrupting"
			"replacement"	"Deadly"
			"replacement"	"Deleterious"
			"replacement"	"Evil"
			"replacement"	"Noxious"
			"replacement"	"Diseased"
			"replacement"	"Pernicious"
			"replacement"	"Pestiferous"
			"replacement"	"Pestilential"
			"replacement"	"Tainted"
			"replacement"	"Contaminated"
			"replacement"	"Pulchritudinous"
			"replacement"	"Odoriferous"
			"replacement"	"Misbegotten"
			"replacement"	"Sacriligious"
		}


		"1"
		{
			"word"	"lol"
			"replacement"	 "lolleth"
			"replacement"	 "lollery"

		}

		"1"
		{
			"word"	"killed"
			"word"	"beaten"
			"replacement"	 "slain"
			"replacement"	 "vanquished"
			"replacement"	 "brung low"
			"replacement"	 "conquered"
			"replacement"	 "fleeced"
			"replacement"	 "humbled"
			"replacement"	 "subjugated"
			"replacement"	 "bested"
			"replacement"	 "foiled"

		}

		"1"
		{
			"word"	"goodbye"
			"word"	"bye"
			"word"	"seeya"
			"word"	"goodnight"
			"replacement"	 "farewell"
			"replacement"	 "fare thee well"
			"replacement"	 "good morrow"
			"replacement"	 "by your leave"
			"replacement"	 "godspeed"
			"replacement"	 "begone"
			"replacement"	 "good day"
			"replacement"	 "good day, sirrah"
			"replacement"	 "good day, sire"
			"replacement"	 "good day, master"
			"replacement"	 "adieu"
			"replacement"	 "cheerio"
			"replacement"	 "pleasant journey"
			"replacement"	 "I bid thee good day"
			"replacement"	 "I bid thee farewell"

		}

		"1"
		{
			"word"	"idiot"
			"word"	"fool"
			"word"	"bastard"
			"word_plural"	"idiots"
			"word_plural"	"fools"
			"word_plural"	"bastards"

			"prepend_count"	"2"
			"replacement_prepend"	"artless"
			"replacement_prepend"	"droning"
			"replacement_prepend"	"fawning"
			"replacement_prepend"	"warped"
			"replacement_prepend"	"paunchy"
			"replacement_prepend"	"puny"
			"replacement_prepend"	"spongy"
			"replacement_prepend"	"ruttish"
			"replacement_prepend"	"vain"
			"replacement_prepend"	"lumpish"
			"replacement_prepend"	"craven"
			"replacement_prepend"	"witless"
			"replacement_prepend"	"pustulent"
			"replacement_prepend"	"infested"
			"replacement_prepend"	"ill-bred"
			"replacement_prepend"	"blind"
			"replacement_prepend"	"scurvy"
			"replacement_prepend"	"puny"
			"replacement_prepend"	"fetid"
			"replacement_prepend"	"vile"
			"replacement_prepend"	"gibbering"
			"replacement_prepend"	"mewling"
			"replacement_prepend"	"rank"
			"replacement_prepend"	"fawning"
			"replacement_prepend"	"moonish"
			"replacement_prepend"	"brutish"
			"replacement_prepend"	"malapert"
			"replacement_prepend"	"curst"
			"replacement_prepend"	"lack-linen"
			"replacement_prepend"	"bottle-ailed"
			"replacement_prepend"	"lyingest"
			"replacement_prepend"	"embossed"
			"replacement_prepend"	"cheating"
			"replacement_prepend"	"crook-pated"
			"replacement_prepend"	"base-court"
			"replacement_prepend"	"hasty-witted"
			"replacement_prepend"	"two-faced"
			"replacement_prepend"	"pox-marked"
			"replacement_prepend"	"toad-brained"
			"replacement_prepend"	"errant"
			"replacement_prepend"	"idle-headed"
			"replacement_prepend"	"quailing"
			"replacement_prepend"	"flap-mouthed"
			"replacement_prepend"	"puking"
			"replacement_prepend"	"fly-bitten"
			"replacement_prepend"	"surly"
			"replacement_prepend"	"tottering"
			"replacement_prepend"	"villainous"
			"replacement_prepend"	"rump-fed"
			"replacement_prepend"	"bootless"
			"replacement_prepend"	"churlish"
			"replacement_prepend"	"tickle-brained"
			"replacement_prepend"	"froward"
			"replacement"	 "mongrel"
			"replacement"	 "codpiece"
			"replacement"	 "jackanape"
			"replacement"	 "ape"
			"replacement"	 "coxcomb"
			"replacement"	 "harlot"
			"replacement"	 "hussy"
			"replacement"	 "strumpet"
			"replacement"	 "cur"
			"replacement"	 "clot"
			"replacement"	 "fool"
			"replacement"	 "barnacle"
			"replacement"	 "harpy"
			"replacement"	 "wench"
			"replacement"	 "churl"
			"replacement"	 "pleb"
			"replacement"	 "taffer"
			"replacement"	 "scoundrel"
			"replacement"	 "scalliwag"
			"replacement"	 "mooncalf"
			"replacement"	 "rapscallion"
			"replacement"	 "doxy"
			"replacement"	 "bawd"
			"replacement"	 "tosspot"
			"replacement"	 "cupshot"
			"replacement"	 "recreant"
			"replacement"	 "fustalarion"
			"replacement"	 "scullion"
			"replacement"	 "rampallion"
			"replacement"	 "knave"
			"replacement"	 "barbermonger"
			"replacement"	 "boil"
			"replacement"	 "plague-sore"
			"replacement"	 "carbuncle"
			"replacement"	 "whoreson"
			"replacement"	 "clotpole"
			"replacement"	 "lout"
			"replacement"	 "gudgeon"
			"replacement"	 "puttock"
			"replacement"	 "skainsmate"
			"replacement"	 "varlet"
			"replacement"	 "bladder"
			"replacement_plural"	"mongrels"
			"replacement_plural"	"codpieces"
			"replacement_plural"	"jackanapes"
			"replacement_plural"	"apes"
			"replacement_plural"	"coxcombes"
			"replacement_plural"	"harlots"
			"replacement_plural"	"hussies"
			"replacement_plural"	"strumpets"
			"replacement_plural"	"clots"
			"replacement_plural"	"fools"
			"replacement_plural"	"barnacles"
			"replacement_plural"	"harpies"
			"replacement_plural"	"wenches"
			"replacement_plural"	"churls"
			"replacement_plural"	"plebians"
			"replacement_plural"	"taffers"
			"replacement_plural"	"scoundrels"
			"replacement_plural"	"scalliwags"
			"replacement_plural"	"mooncalves"
			"replacement_plural"	"rapscallions"
			"replacement_plural"	"doxies"
			"replacement_plural"	"bawds"
			"replacement_plural"	"tosspots"
			"replacement_plural"	"cupshots"
			"replacement_plural"	"recreants"
			"replacement_plural"	"fustalarions"
			"replacement_plural"	"scullions"
			"replacement_plural"	"rampallions"
			"replacement_plural"	"knaves"
			"replacement_plural"	"barbermongerers"
			"replacement_plural"	"boils"
			"replacement_plural"	"plague-sores"
			"replacement_plural"	"carbuncles"
			"replacement_plural"	"whoresons"
			"replacement_plural"	"louts"
		}

		"1"
		{
			"word"	"yes"
			"replacement"	 "aye"
			"replacement"	 "yea"
			"replacement"	 "yea verily"

		}

		"1"
		{
			"word"	"no"
			"replacement"	 "nay"
			"replacement"	 "nayeth"

		}

		"1"
		{
			"word"	"hello"
			"word"	"hi"
			"replacement"	 "good day"
			"replacement"	 "well met"
			"replacement"	 "well meteth"
			"replacement"	 "tally ho"
			"replacement"	 "ave"

		}

		"1"
		{
			"word"	"does"
			"replacement"	 "doeseth"
			"replacement"	 "dost"
			"replacement"	 "doth"

		}

		"1"
		{
			"word"	"kill"
			"word"	"gank"
			"replacement"	 "slay"
			"replacement"	 "vanquish"
			"replacement"	 "bring low"
			"replacement"	 "conquer"
			"replacement"	 "fleece"
			"replacement"	 "humble"
			"replacement"	 "subjugate"
			"replacement"	 "best"
			"replacement"	 "foil"

		}

		"1"
		{
			"word"	"your"
			"replacement"	 "thy"
			"replacement"	 "thine"
			"replacement"	 "thyne"

		}

		"1"
		{
			"word"	"my"
			"chance"	 2
			"replacement"	 "mine"

		}

		"1"
		{
			"word"	"in"
			"chance"	 2
			"replacement"	 "within"

		}

		"1"
		{
			"word"	"it's"
			"chance"	 2
			"replacement"	 "'tis"

		}

		"1"
		{
			"word"	"the"
			"chance"	 2
			"replacement"	 "ye"

		}

		"1"
		{
			"word"	"joke"
			"replacement"	 "jest"
			"replacement"	 "jape"

		}

		"1"
		{
			"word"	"go"
			"chance"	 2
			"replacement"	 ""
			"replacement"	 "be off"

		}

		"1"
		{
			"word"	"will"
			"chance"	 2
			"replacement"	 "wilt"
			"replacement"	 "wouldst"

		}

		"1"
		{
			"word"	"gold"
			"word"	"money"
			"replacement"	 "bullion"
			"replacement"	 "florins"
			"replacement"	 "pounds"
			"replacement"	 "ducats"
			"replacement"	 "pieces o'silver"
			"replacement"	 "groats"
			"replacement"	 "crowns"
			"replacement"	 "ingots"

		}

		"1"
		{
			"word"	"balls"
			"word"	"groin"
			"replacement"	"leathers"
			"replacement"	"beans"
			"replacement"	"poundables"
			"replacement"	"nethers"
			"replacement"	"nadchakles"
			"replacement"	"buis"
			"replacement"	"fellahs"
			"replacement"	"coin purse"

		}


		"1"
		{
			"word"	"water"
			"replacement"	 "ale"
			"replacement"	 "mead"
			"replacement"	 "flagon of ale"
			"replacement"	 "flagon of mead"

		}

		"1"
		{
			"word"	"food"
			"replacement"	 "vittles"
			"replacement"	 "rations"
			"replacement"	 "sustenance"
			"replacement"	 "viands"
			"replacement"	 "nutriments"

		}

		"1"
		{
			"word"	"afk"
			"replacement"	 "away, fighting kobolds"
			"replacement"	 "away, fruity knights"
			"replacement"	 "aft, frisking knickers"
			"replacement"	 "abaft, flailing knouts"


		}

		"1"
		{
			"word"	"aggro"
			"replacement"	 "wrath"

		}

		"1"
		{
			"word"	"town"
			"word"	"village"
			"word"	"home"
			"replacement"	 "borough"
			"replacement"	 "burgage"
			"replacement"	 "burgh"
			"replacement"	 "keep"
			"replacement"	 "castle"
			"replacement"	 "hamlet"
			"replacement"	 "redoubt"


		}

		"1"
		{
			"word"	"sell"
			"replacement"	 "hawk"
			"replacement"	 "pawn"
			"replacement"	 "tender"
			"replacement"	 "purvey"

		}

		"1"
		{
			"word"	"buy"
			"replacement"	 "purchase"
			"replacement"	 "obtain"


		}

		"1"
		{
			"word"	"debuff"
			"replacement"	 "ailment"
			"replacement"	 "sickness"
			"replacement"	 "pox"

		}

		"1"
		{
			"word"	"map"
			"replacement"	 "chart"

		}

		"1"
		{
			"word"	"between"
			"replacement"	 "betwixt"

		}

		"1"
		{
			"word"	"thank"
			"word"	"thx"
			"word_plural"	"thanks"
			"replacement"	 "many good thank"
			"replacement"	 "thankee"
			"replacement"	 "kindly thank"
			"replacement_plural"	"many thanks"
			"replacement_plural"	"much thankage"
			"replacement_plural"	"thankee muchly"

		}

		"1"
		{
			"word"	"please"
			"replacement"	 "I pray you"
			"replacement"	 "prithee"
			"replacement"	 "pray"

		}

		"1"
		{
			"word"	"ok"
			"replacement"	 "as you will"
			"replacement"	 "agreed"
			"replacement"	 "well said"
			"replacement"	 "just so"

		}

		"1"
		{
			"word"	"spy"
			"word_plural"	"spies"
			"word_plural"	"spys"
			"replacement"	 "cutpurse"
			"replacement"	 "pickpocket"
			"replacement"	 "vagabond"
			"replacement"	 "blackguard"
			"replacement"	 "hooligan"
			"replacement"	 "pilferer"
			"replacement"	 "backstabber"
			"replacement"	 "thief"
			"replacement"	 "haunt"
			"replacement"	 "rogue"
			"replacement"	 "rouge" // for the authentic RP experience
			"replacement_plural"	 "cutpurses"
			"replacement_plural"	 "pickpockets"
			"replacement_plural"	 "vagabonds"
			"replacement_plural"	 "blackguards"
			"replacement_plural"	 "pilferers"
			"replacement_plural"	 "backstabbers"
			"replacement_plural"	 "thieves"
			"replacement_plural"	 "haunts"
			"replacement_plural"	 "rogues"
		}

		"1"
		{
			"word"	"soldier"
			"word"	"solly"
			"word_plural"	"soldiers"
			"replacement"	 "mercenary"
			"replacement"	 "warrior"
			"replacement"	 "shovelman"
			"replacement"	 "champion"
			"replacement_plural"	"mercenaries"
			"replacement_plural"	"warriors"
			"replacement_plural"	 "shovelmen"
			"replacement_plural"	"champions"
		}

		"1"
		{
			"word"	"demoman"
			"word_plural"	"demomen"
			"word_plural"	"demomens"
			"word_plural"	"demomans"
			"replacement"	 "swordsman"
			"replacement"	 "scotsman"
			"replacement"	 "drunkard"
			"replacement"	 "swordmaster"
			"replacement"	 "blademaster"
			"replacement"	 "knight"
			"replacement"	 "paladin"
			"replacement_plural"	"swordsmen"
			"replacement_plural"	"scotsmen"
			"replacement_plural"	"drunkards"
			"replacement_plural"	"swordmasters"
			"replacement_plural"	"blades for hire"
			"replacement_plural"	"blademasters"
			"replacement_plural"	 "knights"
			"replacement_plural"	 "paladins"
		}

		"1"
		{
			"word"	"medic"
			"word_plural"	"medics"
			"replacement"	 "priest"
			"replacement"	 "cleric"
			"replacement"	 "healer"
			"replacement"	 "nursemaid"
			"replacement"	 "bonesetter"
			"replacement"	 "butcher"
			"replacement"	 "medicine man"
			"replacement"	 "witchdoctor"
			"replacement"	 "leech"
			"replacement"	 "apothecary"
			"replacement"	 "wizard"
			"replacement_plural"	 "priests"
			"replacement_plural"	 "clerics"
			"replacement_plural"	 "healers"
			"replacement_plural"	 "nursemaids"
			"replacement_plural"	 "bonesetters"
			"replacement_plural"	 "butchers"
			"replacement_plural"	"medicine men"
			"replacement_plural"	"witchdoctors"
			"replacement_plural"	 "leeches"
			"replacement_plural"	 "apothecaries"
			"replacement_plural"	 "wizards"
		}

		"1"
		{
			"word"	"pyro"
			"word_plural"	"pyros"
			"replacement"	 "pyromaniac"
			"replacement"	 "maniac"
			"replacement"	 "flamewielder"
			"replacement"	 "firebrand"
			"replacement"	 "fire mage"
			"replacement"	 "fire magus"
			"replacement"	 "Masked Salamander"
			"replacement_plural"	 "priests"
			"replacement_plural"	 "pyromaniac"
			"replacement_plural"	 "maniac"
			"replacement_plural"	 "flamewielder"
			"replacement_plural"	 "firebrand"
			"replacement_plural"	 "fire mages"
			"replacement_plural"	 "fire magii"
			"replacement_plural"	 "Masked Salamanders"
		}

		"1"
		{
			"word"	"sniper"
			"word_plural"	"snipers"
			"replacement"	 "hunter"
			"replacement"	 "ranger"
			"replacement"	 "woodsman"
			"replacement"	 "beastmaster"
			"replacement"	 "australian"
			"replacement"	 "archer"
			"replacement"	 "bowman"
			"replacement"	 "arrowman"
			"replacement"	 "fletcher"
			"replacement_plural"	"hunters"
			"replacement_plural"	"rangers"
			"replacement_plural"	"woodsmen"
			"replacement_plural"	"beastmasters"
			"replacement_plural"	"australians"
			"replacement_plural"	 "archers"
			"replacement_plural"	 "bowmen"
			"replacement_plural"	 "arrowmen"
			"replacement_plural"	 "fletchers"
		}

		"1"
		{
			"word"	"scout"
			"word_plural"	"scouts"
			"chance"	 2
			"replacement"	 "lookout"
			"replacement"	 "outrider"
			"replacement"	 "spotter"
			"replacement"	 "explorer"
			"replacement"	 "patroller"
			"replacement"	 "runner"
			"replacement"	 "advance guard"
			"replacement_plural"	 "lookouts"
			"replacement_plural"	 "outriders"
			"replacement_plural"	 "spotters"
			"replacement_plural"	 "explorers"
			"replacement_plural"	 "patrollers"
			"replacement_plural"	 "runners"
			"replacement_plural"	 "advance guards"
		}

		"1"
		{
			"word"	"heavy"
			"word_plural"	"heavies"
			"replacement"	 "brawler"
			"replacement"	 "bouncer"
			"replacement"	 "boxer"
			"replacement"	 "bruiser"
			"replacement_plural"	 "brawlers"
			"replacement_plural"	 "bouncers"
			"replacement_plural"	 "boxers"
			"replacement_plural"	 "bruisers"
		}

		"1"
		{
			"word"	"engineer"
			"word"	"engy"
			"word_plural"	"engineers"
			"word_plural"	"engys"
			"word_plural"	"engies"
			"replacement"	 "craftsman"
			"replacement"	 "smith"
			"replacement"	 "smithy"
			"replacement"	 "blacksmith"
			"replacement"	 "artisan"
			"replacement"	 "machinist"
			"replacement"	 "ironsmith"
			"replacement"	 "metalworker"
			"replacement"	 "golem-maker"
			"replacement"	 "golemist"
			"replacement_plural"	 "craftsmen"
			"replacement_plural"	 "smiths"
			"replacement_plural"	 "smithies"
			"replacement_plural"	 "blacksmiths"
			"replacement_plural"	 "artisans"
			"replacement_plural"	 "machinists"
			"replacement_plural"	 "ironsmiths"
			"replacement_plural"	 "metalworkers"
			"replacement_plural"	 "golem-maker"
			"replacement_plural"	 "golemists"
		}

		"1"
		{
			"word"	"is"
			"chance"	 2
			"replacement"	 "be"

		}

		"1"
		{
			"word"	"party"
			"word"	"group"
			"word_plural"	"parties"
			"word_plural"	"groups"
			"replacement"	 "band"
			"replacement"	 "fellowship"
			"replacement"	 "assembly"
			"replacement"	 "troop"
			"replacement_plural"	"bands"
			"replacement_plural"	"fellowships"
			"replacement_plural"	"assemblies"
			"replacement_plural"	"troops"

		}

		"1"
		{
			"word"	"lfg"
			"replacement_prepend"	"I am seeking"
			"replacement_prepend"	"I be looking for"
			"replacement_prepend"	"I am desiring"
			"replacement_prepend"	"I be searching for"
			"replacement_prepend"	"I'm in search of"
			"replacement"	 "a fellowship"
			"replacement"	 "a band of trusty fellows"
			"replacement"	 "a trustworthy group"
			"replacement"	 "fine adventurers"
			"replacement"	 "a worthy band"

		}

		"1"
		{
			"word"	"newbie"
			"word"	"newb"
			"word"	"noob"
			"word"	"nub"
			"word"	"lowbie"
			"word"	"beginner"
			"word_plural"	"newbies"
			"word_plural"	"newbs"
			"word_plural"	"noobs"
			"word_plural"	"nubs"
			"word_plural"	"lowbies"
			"word_plural"	"beginners"
			"replacement"	 "neophyte"
			"replacement"	 "youngster"
			"replacement"	 "serf"
			"replacement"	 "dabbler"
			"replacement"	 "pleb"
			"replacement"	 "apprentice"
			"replacement"	 "journeyman"
			"replacement"	 "pupil"
			"replacement"	 "tenderfoot"
			"replacement"	 "initiate"
			"replacement"	 "fledgling"
			"replacement"	 "greenhorn"
			"replacement"	 "acolyte"
			"replacement_plural"	"neophytes"
			"replacement_plural"	"youngsters"
			"replacement_plural"	"serfs"
			"replacement_plural"	"dabblers"
			"replacement_plural"	"plebians"
			"replacement_plural"	"apprentices"
			"replacement_plural"	"journeymen"
			"replacement_plural"	"pupils"
			"replacement_plural"	"tenderfeet"
			"replacement_plural"	"initiates"
			"replacement_plural"	"fledglings"
			"replacement_plural"	"greenhorns"
			"replacement_plural"	 "acolytes"

		}

		"1"
		{
			"word"	"level"
			"word_plural"	"levels"
			"chance"	 2
			"replacement"	 "rank"
			"replacement"	 "station"

		}

		"1"
		{
			"word"	"rofl"
			"word"	"roflmao"
			"word"	"roflol"
			"replacement"	 "rofleth"
			"replacement"	 "guffaw"


		}

		"1"
		{
			"word"	"wait"
			"word_plural"	"waits"
			"chance"	 2
			"replacement"	 "hold"
			"replacement"	 "hold hard"
			"replacement"	 "mark time"
			"replacement"	 "tarry"
			"replacement_plural"	"holds"
			"replacement_plural"	"holds hard"
			"replacement_plural"	"marks time"
			"replacement_plural"	"tarries"

		}

		"1"
		{
			"word"	"need"
			"word_plural"	"needs"
			"chance"	 2
			"replacement"	 "covet"
			"replacement"	 "wish"
			"replacement"	 "desire"
			"replacement"	 "request"
			"replacement_plural"	"covets"
			"replacement_plural"	"wishes"
			"replacement_plural"	"desires"
			"replacement_plural"	"requests"

		}

		"1"
		{
			"word"	"even"
			"chance"	 2
			"replacement"	 "e'en"

		}

		"1"
		{
			"word"	"never"
			"chance"	 2
			"replacement"	 "ne'er"

		}

		"1"
		{
			"word"	"over"
			"chance"	 2
			"replacement"	 "o'er"

		}

		"1"
		{
			"word"	"before"
			"chance"	 2
			"replacement"	 "'ere"

		}

		"1"
		{
			"word"	"unless"
			"chance"	 2
			"replacement"	 "lest"

		}

		"1"
		{
			"word"	"haha"
			"word"	"hehe"
			"word"	"heh"
			"word"	"hah"
			"replacement"	 "guffaw!"
			"replacement"	 "cackle!"
			"replacement"	 "oh, 'tis to laugh!"
			"replacement"	 "zounds!"
			"replacement"	 "chuckle!"
			"replacement"	 "snigger!"
			"replacement"	 "snort!"
			"replacement"	 "snicker!"
			"replacement"	 "cachinnate!"
			"replacement"	 "titter!"
			"replacement"	 "and there was much tittering!"
			"replacement"	 "and there was much guffawing!"
			"replacement"	 "and there was much chuckling!"
			"replacement"	 "and there was much snorting!"
			"replacement"	 "and there was much snickering!"
			"replacement"	 "and there was much mirth!"

		}

		"1"
		{
			"word"	"shop"
			"word"	"store"
			"word_plural"	"shops"
			"word_plural"	"stores"
			"replacement"	 "shoppe"
			"replacement"	 "shopcart"
			"replacement"	 "olde shoppe"
			"replacement"	 "market"
			"replacement"	 "marketplace"
			"replacement"	 "ye olde thrifte shoppe"


		}

		"1"
		{
			"word"	"vendor"
			"word"	"seller"
			"word_plural"	"vendors"
			"word_plural"	"salesmen"
			"replacement"	 "shopkeep"
			"replacement"	 "monger"
			"replacement"	 "merchant"
			"replacement"	 "purveyor"
			"replacement_plural"	"shopkeepers"
			"replacement_plural"	"mongerers"
			"replacement_plural"	"merchants"
			"replacement_plural"	"purveyors"

		}

		"1"
		{
			"word"	"friend"
			"word"	"buddy"
			"word"	"pal"
			"word"	"mate"
			"word_plural"	"friends"
			"word_plural"	"buddies"
			"word_plural"	"pals"
			"word_plural"	"mates"
			"replacement"	 "companion"
			"replacement"	 "boon companion"
			"replacement"	 "chum"
			"replacement"	 "lad"
			"replacement"	 "cohort"
			"replacement"	 "confidant"
			"replacement"	 "right-hand man"
			"replacement"	 "mate"
			"replacement"	 "compadre"
			"replacement"	 "fellow"
			"replacement_plural"	"companions"
			"replacement_plural"	"boon companions"
			"replacement_plural"	"chums"
			"replacement_plural"	"lads"
			"replacement_plural"	"cohorts"
			"replacement_plural"	"confidants"
			"replacement_plural"	"right-hand men"
			"replacement_plural"	"mates"
			"replacement_plural"	"compadres"
			"replacement_plural"	"fellows"

		}

		"1"
		{
			"word"	"teh"
			"replacement"	 "the"

		}

		"1"
		{
			"word"	"assist"
			"replacement"	 "aid"
			"replacement"	 "aideth"
			"replacement"	 "saveth"
			"replacement"	 "assistance"
			"replacement"	 "succor"

		}

		"1"
		{
			"word"	"could"
			"chance"	 2
			"replacement"	 "couldst"

		}

		"1"
		{
			"word"	"would"
			"chance"	 2
			"replacement"	 "wouldst"

		}

		"1"
		{
			"word"	"sure"
			"chance"	 3
			"replacement"	 "shore"

		}

		"1"
		{
			"word"	"maybe"
			"chance"	 3
			"replacement"	 "mayhaps"
			"replacement"	 "perchance"

		}

		"1"
		{
			"word"	"girl"
			"word"	"woman"
			"word_plural"	"girls"
			"word_plural"	"women"
			"replacement"	 "madame"
			"replacement"	 "waif"
			"replacement"	 "mistress"
			"replacement"	 "lass"
			"replacement"	 "lady"
			"replacement"	 "goodwife"
			"replacement"	 "maid"
			"replacement"	 "maiden"
			"replacement_plural"	"madames"
			"replacement_plural"	"waifs"
			"replacement_plural"	"mistresses"
			"replacement_plural"	"lasses"
			"replacement_plural"	"ladies"
			"replacement_plural"	"goodwives"
			"replacement_plural"	"maids"
			"replacement_plural"	"maidens"

		}

		"1"
		{
			"word"	"later"
			"chance"	 2
			"replacement"	 "anon"

		}

		"1"
		{
			"word"	"often"
			"chance"	 2
			"replacement"	 "oft"

		}

		"1"
		{
			"word"	"really"
			"chance"	 2
			"replacement"	 "indeed"
			"replacement"	 "in truth"
		}

		"1"
		{
			"word" "those"
			"chance"  2
			"replacement" "yon"
		}

		"1"
		{
			"word"  "here"
			"chance"  4
			"replacement"  "hither"
		}

		"1"
		{
			"word"  "enough"
			"chance"  2
			"replacement"  "enow"
		}

		"1"
		{
			"word"  "wow"
			"chance"  2
			"replacement"	"Marry"
			"replacement"	  "Faith"
			"replacement"	  "S'wounds"
			"replacement"	  "God's wounds"
			"replacement"	  "Zounds"
		}

		"1"
		{
			"word"  "child"
			"chance"  2
			"replacement"	  "poppet"
		}

		"1"
		{
			"word"  "why"
			"chance"  2
			"replacement"	  "wherefore"
		}

		"1"
		{
			"word"  "away"
			"chance"  2
			"replacement"	  "aroint"
		}

		"1"
		{
			"word"  "being"
			"chance"  3
			"replacement"	  "bein'"
		}

		"1"
		{
			"word"  "of"
			"chance"  3
			"replacement"	  "o'"
		}

		"1"
		{
			"word"  "fucker"
			"replacement"	  "swiver"
		}

		"1"
		{
			"word"  "shit"
			"replacement"	  "nightsoil"
		}

		"1"
		{
			"word"  "making"
			"chance"  2
			"replacement"	  "a-makin'"
		}

		"1"
		{
			"word"  "though"
			"chance"  2
			"replacement"	  "tho'"
		}

		"1"
		{
			"word"  "until"
			"chance"  2
			"replacement"	  "'till"
		}

		"1"
		{
			"word"	  "underneath"
			"word"	  "beneath"
			"chance"  2
			"replacement"	  "'neath"
		}

		"1"
		{
			"word"  "coming"
			"chance"  2
			"replacement"	  "a-comin'"
		}

		"1"
		{
			"word"  "walking"
			"chance"  2
			"replacement"	  "a-walkin'"
		}

		"1"
		{
			"word"  "hunting"
			"chance"  2
			"replacement"	  "a-huntin'"
		}

		"1"
		{
			"word"  "bet"
			"chance"  2
			"replacement"	  "warrant"
		}

		"1"
		{
			"word"	"!"
			"chance"	 4
			"replacement"	 ", verily!"
			"replacement"	 ", verily I say!"
			"replacement"	 ", verily I sayeth!"
			"replacement"	 ", I say!"
			"replacement"	 ", I sayeth!"
			"replacement"	 "! Huzzah!"
			"replacement"	 "! Hear Hear!"
			"replacement"	 "! What-ho!"
			"replacement"	 "! Ho!"
			"replacement"	 "! Fie!"
			"replacement"	 ", indeed!"
		}

		"1"
		{
			"word"	"?"
			"chance"	 4
			"replacement"	 ", I say?"
			"replacement"	 ", I wonder?"
			"replacement"	 ", wonder I?"
			"replacement"	 ", what say thee?"
			"replacement"	 ", what sayeth thee?"
			"replacement"	 ", what say thou?"
			"replacement"	 ", what sayeth thou?"
			"replacement"	 ", I ponder?"
			"replacement"	 ", I pondereth?"
			"replacement"	 ", pray tell?"
			"replacement"	 ", ho?"
			"replacement"	 ", do tell?"
		}

		"1"
		{
			"word"	"flag"
			"replacement"	 "pennant"
			"replacement"	 "banner"
			"replacement"	 "colors"
			"replacement"	 "heraldry"

		}



	}
}`;

const autorp_patois = `"autorp_patois.txt"
{
	"prepended_words"
	{
		"Bless up,"	1
		"Irie,"	1
		"Seen,"	1
		"Jah know,"	1
		"Ras,"	1
		"Big up,"	1
		"Give thanks,"	1
		"One love,"	1
	}

	"appended_words"
	{
		"ya nuh see?"	1
		"seen?"	1
		"nuh true?"	1
		"irie!"	1
		"raatid!"	1
	}

	"word_replacements"
	{
		"1"
		{
			"word"	"i"
			"word"	"me"
			"word"	"myself"
			"replacement"	"mi"
			"replacement"	"i-man"
			"replacement"	"i an i"
		}

		"1"
		{
			"word"	"you"
			"word"	"u"
			"word"	"your"
			"word"	"yours"
			"replacement"	"yuh"
			"replacement"	"di i"
		}

		"1"
		{
			"word"	"we"
			"word"	"us"
			"word"	"our"
			"word"	"ours"
			"replacement"	"wi"
			"replacement"	"i an i"
		}

		"1"
		{
			"word"	"they"
			"word"	"them"
			"word"	"their"
			"word"	"theirs"
			"replacement"	"dem"
		}

		"1"
		{
			"word"	"is"
			"word"	"am"
			"word"	"are"
			"replacement"	"deh"
			"replacement"	"dey"
		}

		"1"
		{
			"word"	"not"
			"replacement"	"nuh"
		}

		"1"
		{
			"word"	"hello"
			"word"	"hi"
			"replacement"	"wah gwan"
			"replacement"	"hail"
			"replacement"	"irie"
		}

		"1"
		{
			"word"	"goodbye"
			"word"	"bye"
			"word"	"later"
			"replacement"	"likkle more"
			"replacement"	"more time"
			"replacement"	"cool runnings"
		}

		"1"
		{
			"prev"	"safe"
			"word"	"trip"
			"replacement"	"cool runnings"
		}

		"1"
		{
			"prev"	"have"
			"word"	"to"
			"replacement"	"haffi"
			"replacement"	"a fe"
		}

		"1"
		{
			"prev"	"going"
			"word"	"to"
			"replacement"	"a go"
		}

		"1"
		{
			"prev"	"come"
			"word"	"here"
			"replacement"	"come yah"
			"replacement"	"cumyu"
		}

		"1"
		{
			"prev"	"look"
			"word"	"here"
			"replacement"	"coo yah"
			"replacement"	"cu yah"
		}

		"1"
		{
			"prev"	"look"
			"word"	"there"
			"replacement"	"cu deh"
		}

		"1"
		{
			"prev"	"look"
			"word"	"at"
			"replacement"	"cu pan"
			"replacement"	"coo pon"
		}

		"1"
		{
			"word"	"idiot"
			"word"	"fool"
			"word"	"stupid"
			"word"	"dumb"
			"word"	"moron"
			"word"	"loser"
			"word"	"jerk"
			"word"	"punk"
			"word"	"clown"
			"word"	"bastard"
			"word_plural"	"idiots"
			"word_plural"	"fools"
			"word_plural"	"stupids"
			"word_plural"	"dumbs"
			"word_plural"	"morons"
			"word_plural"	"losers"
			"word_plural"	"jerks"
			"word_plural"	"punks"
			"word_plural"	"clowns"
			"word_plural"	"bastards"
			"prepend_count"	"2"
			"replacement_prepend"	"dutty"
			"replacement_prepend"	"renk"
			"replacement_prepend"	"boasie"
			"replacement_prepend"	"donkya"
			"replacement_prepend"	"pyaka"
			"replacement_prepend"	"slacky"
			"replacement_prepend"	"nyingi-nyingi"
			"replacement"	"mumu"
			"replacement"	"bubu"
			"replacement"	"bobo"
			"replacement"	"buttu"
			"replacement"	"lagga head"
			"replacement"	"buguyaga"
			"replacement"	"quashie"
			"replacement"	"bungo"
			"replacement"	"sanfi"
			"replacement_plural"	"mumu dem"
			"replacement_plural"	"all a mumu"
			"replacement_plural"	"mumus"
			"replacement_plural"	"bubu dem"
			"replacement_plural"	"all a bubu"
			"replacement_plural"	"bubus"
			"replacement_plural"	"bobo dem"
			"replacement_plural"	"all a bobo"
			"replacement_plural"	"bobos"
			"replacement_plural"	"buttu dem"
			"replacement_plural"	"all a buttu"
			"replacement_plural"	"buttus"
			"replacement_plural"	"lagga head dem"
			"replacement_plural"	"all a lagga head"
			"replacement_plural"	"buguyaga dem"
			"replacement_plural"	"all a buguyaga"
			"replacement_plural"	"buguyagas"
			"replacement_plural"	"quashie dem"
			"replacement_plural"	"all a quashie"
			"replacement_plural"	"quashies"
		}

		"1"
		{
			"word"	"police"
			"word"	"cop"
			"word"	"officer"
			"word"	"law"
			"word"	"government"
			"word"	"system"
			"word"	"establishment"
			"word_plural"	"polices"
			"word_plural"	"cops"
			"word_plural"	"officers"
			"word_plural"	"laws"
			"word_plural"	"governments"
			"word_plural"	"systems"
			"word_plural"	"establishments"
			"prepend_count"	"1"
			"replacement_prepend"	"dutty"
			"replacement_prepend"	"badness"
			"replacement_prepend"	"fuckery"
			"replacement_prepend"	"stoosh"
			"replacement"	"babylon"
			"replacement"	"beast"
			"replacement"	"downpressor"
			"replacement_plural"	"babylon dem"
			"replacement_plural"	"all a babylon"
			"replacement_plural"	"babylons"
			"replacement_plural"	"beast dem"
			"replacement_plural"	"all a beast"
			"replacement_plural"	"beasts"
			"replacement_plural"	"downpressor dem"
			"replacement_plural"	"all a downpressor"
			"replacement_plural"	"downpressors"
		}

		"1"
		{
			"word"	"marijuana"
			"word"	"weed"
			"word"	"herb"
			"word"	"joint"
			"word"	"spliff"
			"word_plural"	"marijuanas"
			"word_plural"	"weeds"
			"word_plural"	"herbs"
			"word_plural"	"joints"
			"word_plural"	"spliffs"
			"prepend_count"	"1"
			"replacement_prepend"	"irie"
			"replacement_prepend"	"red"
			"replacement_prepend"	"crucial"
			"replacement"	"ganja"
			"replacement"	"herb"
			"replacement"	"collie"
			"replacement"	"kaya"
			"replacement"	"corn"
			"replacement"	"spliff"
			"replacement"	"lambsbread"
			"replacement"	"sensimilla"
			"replacement_plural"	"ganja dem"
			"replacement_plural"	"all a ganja"
			"replacement_plural"	"ganjas"
			"replacement_plural"	"herb dem"
			"replacement_plural"	"all a herb"
			"replacement_plural"	"herbs"
			"replacement_plural"	"collie dem"
			"replacement_plural"	"all a collie"
			"replacement_plural"	"collies"
			"replacement_plural"	"kaya dem"
			"replacement_plural"	"all a kaya"
			"replacement_plural"	"kayas"
			"replacement_plural"	"corn dem"
			"replacement_plural"	"all a corn"
			"replacement_plural"	"corns"
			"replacement_plural"	"spliff dem"
			"replacement_plural"	"all a spliff"
			"replacement_plural"	"spliffs"
			"replacement_plural"	"lambsbread dem"
			"replacement_plural"	"all a lambsbread"
			"replacement_plural"	"lambsbreads"
			"replacement_plural"	"sensimilla dem"
			"replacement_plural"	"all a sensimilla"
			"replacement_plural"	"sensimillas"
		}

		"1"
		{
			"word"	"money"
			"word"	"cash"
			"word"	"funds"
			"word"	"coin"
			"word"	"coins"
			"word_plural"	"moneys"
			"word_plural"	"cashes"
			"word_plural"	"fundses"
			"word_plural"	"coins"
			"prepend_count"	"1"
			"replacement_prepend"	"nuff"
			"replacement_prepend"	"whole heap"
			"replacement_prepend"	"bans"
			"replacement"	"funds"
			"replacement"	"duns"
			"replacement"	"coil"
			"replacement"	"corn"
			"replacement_plural"	"funds dem"
			"replacement_plural"	"all a funds"
			"replacement_plural"	"fundses"
			"replacement_plural"	"duns dem"
			"replacement_plural"	"all a duns"
			"replacement_plural"	"dunses"
			"replacement_plural"	"coil dem"
			"replacement_plural"	"all a coil"
			"replacement_plural"	"coils"
			"replacement_plural"	"corn dem"
			"replacement_plural"	"all a corn"
			"replacement_plural"	"corns"
		}

		"1"
		{
			"word"	"outdoors"
			"word_plural"	"outdoorses"
			"replacement"	"a door"
			"replacement"	"a"
			"replacement"	"door"
			"replacement_plural"	"a door dem"
			"replacement_plural"	"all a a door"
			"replacement_plural"	"a dem"
			"replacement_plural"	"all a a"
			"replacement_plural"	"as"
			"replacement_plural"	"door dem"
			"replacement_plural"	"all a door"
			"replacement_plural"	"doors"
		}

		"1"
		{
			"word"	"sensations"
			"word_plural"	"sensationses"
			"word"	"felt"
			"word_plural"	"felts"
			"word"	"during"
			"word_plural"	"durings"
			"word"	"sex"
			"word_plural"	"sexes"
			"replacement"	"agony"
			"replacement_plural"	"agony dem"
			"replacement_plural"	"all a agony"
			"replacement_plural"	"agonies"
		}

		"1"
		{
			"word"	"ask"
			"word_plural"	"asks"
			"replacement"	"aks"
			"replacement_plural"	"aks dem"
			"replacement_plural"	"all a aks"
			"replacement_plural"	"akses"
		}

		"1"
		{
			"word"	"poorhouse"
			"word_plural"	"poorhouses"
			"replacement"	"amshouse"
			"replacement_plural"	"amshouse dem"
			"replacement_plural"	"all a amshouse"
			"replacement_plural"	"amshouses"
		}

		"1"
		{
			"word"	"biblical"
			"word_plural"	"biblicals"
			"word"	"final"
			"word_plural"	"finals"
			"word"	"battle"
			"word_plural"	"battles"
			"word"	"between"
			"word_plural"	"betweens"
			"word"	"forces"
			"word_plural"	"forceses"
			"word"	"good"
			"word_plural"	"goods"
			"word"	"evil"
			"word_plural"	"evils"
			"replacement"	"armageddon"
			"replacement_plural"	"armageddon dem"
			"replacement_plural"	"all a armageddon"
			"replacement_plural"	"armageddons"
		}

		"1"
		{
			"word"	"good"
			"word_plural"	"goods"
			"word"	"great"
			"word_plural"	"greats"
			"replacement"	"bad"
			"replacement_plural"	"bad dem"
			"replacement_plural"	"all a bad"
			"replacement_plural"	"bads"
		}

		"1"
		{
			"word"	"hooligan"
			"word_plural"	"hooligans"
			"word"	"behavior"
			"word_plural"	"behaviors"
			"word"	"violence"
			"word_plural"	"violences"
			"word"	"own"
			"word_plural"	"owns"
			"word"	"sake"
			"word_plural"	"sakes"
			"replacement"	"badness"
			"replacement_plural"	"badness dem"
			"replacement_plural"	"all a badness"
			"replacement_plural"	"badnesses"
		}

		"1"
		{
			"word"	"clumsy"
			"word_plural"	"clumsies"
			"replacement"	"bafan"
			"replacement_plural"	"bafan dem"
			"replacement_plural"	"all a bafan"
			"replacement_plural"	"bafans"
		}

		"1"
		{
			"word"	"child"
			"word_plural"	"childs"
			"word"	"learn"
			"word_plural"	"learns"
			"word"	"walk"
			"word_plural"	"walks"
			"word"	"years"
			"word_plural"	"yearses"
			"word"	"kid"
			"word_plural"	"kids"
			"replacement"	"bafang"
			"replacement_plural"	"bafang dem"
			"replacement_plural"	"all a bafang"
			"replacement_plural"	"bafangs"
		}

		"1"
		{
			"word"	"betrayer"
			"word_plural"	"betrayers"
			"replacement"	"bag-o-wire"
			"replacement_plural"	"bag-o-wire dem"
			"replacement_plural"	"all a bag-o-wire"
			"replacement_plural"	"bag-o-wires"
		}

		"1"
		{
			"word"	"underpants"
			"word_plural"	"underpantses"
			"word"	"woman"
			"word_plural"	"womans"
			"word"	"child"
			"word_plural"	"childs"
			"replacement"	"baggy"
			"replacement_plural"	"baggy dem"
			"replacement_plural"	"all a baggy"
			"replacement_plural"	"baggies"
		}

		"1"
		{
			"word"	"white"
			"word_plural"	"whites"
			"word"	"slavemaster"
			"word_plural"	"slavemasters"
			"word"	"member"
			"word_plural"	"members"
			"word"	"ruling"
			"word_plural"	"rulings"
			"word"	"class"
			"word_plural"	"classes"
			"word"	"colonial"
			"word_plural"	"colonials"
			"word"	"days"
			"word_plural"	"dayses"
			"replacement"	"bakra"
			"replacement_plural"	"bakra dem"
			"replacement_plural"	"all a bakra"
			"replacement_plural"	"bakras"
		}

		"1"
		{
			"word"	"straight"
			"word_plural"	"straights"
			"word"	"person"
			"word_plural"	"persons"
			"replacement"	"bald-head"
			"replacement_plural"	"bald-head dem"
			"replacement_plural"	"all a bald-head"
			"replacement_plural"	"bald-heads"
		}

		"1"
		{
			"word"	"rolling"
			"word_plural"	"rollings"
			"word"	"paper"
			"word_plural"	"papers"
			"replacement"	"bambu"
			"replacement_plural"	"bambu dem"
			"replacement_plural"	"all a bambu"
			"replacement_plural"	"bambus"
		}

		"1"
		{
			"word"	"pancake"
			"word_plural"	"pancakes"
			"word"	"made"
			"word_plural"	"mades"
			"word"	"cassava"
			"word_plural"	"cassavas"
			"word"	"after"
			"word_plural"	"afters"
			"word"	"has"
			"word_plural"	"hases"
			"word"	"grated"
			"word_plural"	"grateds"
			"word"	"squeezed"
			"word_plural"	"squeezeds"
			"word"	"remove"
			"word_plural"	"removes"
			"word"	"bitter"
			"word_plural"	"bitters"
			"word"	"juice"
			"word_plural"	"juices"
			"replacement"	"bammy"
			"replacement_plural"	"bammy dem"
			"replacement_plural"	"all a bammy"
			"replacement_plural"	"bammies"
		}

		"1"
		{
			"word"	"bandit"
			"word_plural"	"bandits"
			"word"	"criminal"
			"word_plural"	"criminals"
			"word"	"living"
			"word_plural"	"livings"
			"word"	"guile"
			"word_plural"	"guiles"
			"word"	"bizness"
			"word_plural"	"biznesses"
			"word"	"racket"
			"word_plural"	"rackets"
			"word"	"swindle"
			"word_plural"	"swindles"
			"replacement"	"bandulu"
			"replacement_plural"	"bandulu dem"
			"replacement_plural"	"all a bandulu"
			"replacement_plural"	"bandulus"
		}

		"1"
		{
			"word"	"hubbub"
			"word_plural"	"hubbubs"
			"word"	"uproar"
			"word_plural"	"uproars"
			"word"	"disorder"
			"word_plural"	"disorders"
			"word"	"disturbance"
			"word_plural"	"disturbances"
			"replacement"	"bangarang"
			"replacement_plural"	"bangarang dem"
			"replacement_plural"	"all a bangarang"
			"replacement_plural"	"bangarangs"
		}

		"1"
		{
			"word"	"basket"
			"word_plural"	"baskets"
			"word"	"including"
			"word_plural"	"includings"
			"word"	"type"
			"word_plural"	"types"
			"word"	"which"
			"word_plural"	"whiches"
			"word"	"hangs"
			"word_plural"	"hangses"
			"word"	"sides"
			"word_plural"	"sideses"
			"word"	"donkey"
			"word_plural"	"donkeys"
			"replacement"	"bankra"
			"replacement_plural"	"bankra dem"
			"replacement_plural"	"all a bankra"
			"replacement_plural"	"bankras"
		}

		"1"
		{
			"word"	"storyteller"
			"word_plural"	"storytellers"
			"replacement"	"banton"
			"replacement_plural"	"banton dem"
			"replacement_plural"	"all a banton"
			"replacement_plural"	"bantons"
		}

		"1"
		{
			"word"	"party"
			"word_plural"	"parties"
			"word"	"dance"
			"word_plural"	"dances"
			"word"	"session"
			"word_plural"	"sessions"
			"replacement"	"bashment"
			"replacement_plural"	"bashment dem"
			"replacement_plural"	"all a bashment"
			"replacement_plural"	"bashments"
		}

		"1"
		{
			"word"	"butterfly"
			"word_plural"	"butterflies"
			"word"	"moth"
			"word_plural"	"moths"
			"replacement"	"bat"
			"replacement_plural"	"bat dem"
			"replacement_plural"	"all a bat"
			"replacement_plural"	"bats"
		}

		"1"
		{
			"word"	"bottom"
			"word_plural"	"bottoms"
			"replacement"	"batty"
			"replacement_plural"	"batty dem"
			"replacement_plural"	"all a batty"
			"replacement_plural"	"batties"
		}

		"1"
		{
			"word"	"gay"
			"word_plural"	"gays"
			"word"	"person"
			"word_plural"	"persons"
			"replacement"	"battybwoy"
			"replacement_plural"	"battybwoy dem"
			"replacement_plural"	"all a battybwoy"
			"replacement_plural"	"battybwoys"
		}

		"1"
		{
			"word"	"police"
			"word_plural"	"polices"
			"word"	"policeman"
			"word_plural"	"policemans"
			"word"	"cop"
			"word_plural"	"cops"
			"word"	"cops"
			"word_plural"	"copses"
			"word"	"officer"
			"word_plural"	"officers"
			"word"	"officers"
			"word_plural"	"officerses"
			"word"	"lawman"
			"word_plural"	"lawmans"
			"word"	"lawmen"
			"word_plural"	"lawmens"
			"word"	"policewoman"
			"word_plural"	"policewomans"
			"replacement"	"beast"
			"replacement_plural"	"beast dem"
			"replacement_plural"	"all a beast"
			"replacement_plural"	"beasts"
		}

		"1"
		{
			"word"	"desirable"
			"word_plural"	"desirables"
			"word"	"woman"
			"word_plural"	"womans"
			"replacement"	"beef"
			"replacement_plural"	"beef dem"
			"replacement_plural"	"all a beef"
			"replacement_plural"	"beefs"
		}

		"1"
		{
			"word"	"little"
			"word_plural"	"littles"
			"replacement"	"beenie"
			"replacement_plural"	"beenie dem"
			"replacement_plural"	"all a beenie"
			"replacement_plural"	"beenies"
		}

		"1"
		{
			"word"	"vexed"
			"word_plural"	"vexeds"
			"replacement"	"bex"
			"replacement_plural"	"bex dem"
			"replacement_plural"	"all a bex"
			"replacement_plural"	"bexes"
		}

		"1"
		{
			"word"	"uncouth"
			"word_plural"	"uncouths"
			"word"	"fashion"
			"word_plural"	"fashions"
			"word"	"uncultured"
			"word_plural"	"uncultureds"
			"word"	"person"
			"word_plural"	"persons"
			"replacement"	"bhuttu"
			"replacement_plural"	"bhuttu dem"
			"replacement_plural"	"all a bhuttu"
			"replacement_plural"	"bhuttus"
		}

		"1"
		{
			"word"	"charge"
			"word_plural"	"charges"
			"replacement"	"big bout yah"
			"replacement_plural"	"big bout yah dem"
			"replacement_plural"	"all a big bout yah"
		}

		"1"
		{
			"word"	"particularly"
			"word_plural"	"particularlies"
			"word"	"attractive"
			"word_plural"	"attractives"
			"word"	"woman"
			"word_plural"	"womans"
			"replacement"	"biscuit"
			"replacement_plural"	"biscuit dem"
			"replacement_plural"	"all a biscuit"
			"replacement_plural"	"biscuits"
		}

		"1"
		{
			"word"	"cola"
			"word_plural"	"colas"
			"word"	"nut"
			"word_plural"	"nuts"
			"replacement"	"bissy"
			"replacement_plural"	"bissy dem"
			"replacement_plural"	"all a bissy"
			"replacement_plural"	"bissies"
		}

		"1"
		{
			"word"	"marijuana"
			"word_plural"	"marijuanas"
			"word"	"weed"
			"word_plural"	"weeds"
			"word"	"smoke"
			"word_plural"	"smokes"
			"replacement"	"black up"
			"replacement"	"black"
			"replacement"	"up"
			"replacement_plural"	"black up dem"
			"replacement_plural"	"all a black up"
			"replacement_plural"	"black dem"
			"replacement_plural"	"all a black"
			"replacement_plural"	"blacks"
			"replacement_plural"	"up dem"
			"replacement_plural"	"all a up"
			"replacement_plural"	"ups"
		}

		"1"
		{
			"word"	"rascal"
			"word_plural"	"rascals"
			"word"	"hooligan"
			"word_plural"	"hooligans"
			"replacement"	"blackheart man"
			"replacement"	"blackheart"
			"replacement"	"man"
			"replacement_plural"	"blackheart man dem"
			"replacement_plural"	"all a blackheart man"
			"replacement_plural"	"blackheart dem"
			"replacement_plural"	"all a blackheart"
			"replacement_plural"	"blackhearts"
			"replacement_plural"	"man dem"
			"replacement_plural"	"all a man"
			"replacement_plural"	"mans"
		}

		"1"
		{
			"word"	"exclamation"
			"word_plural"	"exclamations"
			"word"	"surprise"
			"word_plural"	"surprises"
			"replacement"	"blouse and skirt"
			"replacement_plural"	"blouse and skirt dem"
			"replacement_plural"	"all a blouse and skirt"
		}

		"1"
		{
			"word"	"have"
			"word_plural"	"haves"
			"word"	"emerged"
			"word_plural"	"emergeds"
			"word"	"express"
			"word_plural"	"expresses"
			"word"	"exclamation"
			"word_plural"	"exclamations"
			"word"	"surprise"
			"word_plural"	"surprises"
			"replacement"	"blow wow!"
			"replacement_plural"	"blow wow! dem"
			"replacement_plural"	"all a blow wow!"
		}

		"1"
		{
			"word"	"chance"
			"word_plural"	"chances"
			"word"	"get"
			"word_plural"	"gets"
			"replacement"	"bly"
			"replacement_plural"	"bly dem"
			"replacement_plural"	"all a bly"
			"replacement_plural"	"blies"
		}

		"1"
		{
			"word"	"swollen"
			"word_plural"	"swollens"
			"word"	"penis"
			"word_plural"	"penises"
			"word"	"testicles"
			"word_plural"	"testicleses"
			"replacement"	"boasin tone"
			"replacement"	"boasin"
			"replacement"	"tone"
			"replacement_plural"	"boasin tone dem"
			"replacement_plural"	"all a boasin tone"
			"replacement_plural"	"boasin dem"
			"replacement_plural"	"all a boasin"
			"replacement_plural"	"boasins"
			"replacement_plural"	"tone dem"
			"replacement_plural"	"all a tone"
			"replacement_plural"	"tones"
		}

		"1"
		{
			"word"	"fool"
			"word_plural"	"fools"
			"replacement"	"bobo"
			"replacement_plural"	"bobo dem"
			"replacement_plural"	"all a bobo"
			"replacement_plural"	"bobos"
		}

		"1"
		{
			"word"	"sect"
			"word_plural"	"sects"
			"word"	"based"
			"word_plural"	"baseds"
			"word"	"teachings"
			"word_plural"	"teachingses"
			"word"	"prince"
			"word_plural"	"princes"
			"word"	"emanuel"
			"word_plural"	"emanuels"
			"word"	"edwards"
			"word_plural"	"edwardses"
			"word"	"distinguished"
			"word_plural"	"distinguisheds"
			"word"	"turbin-like"
			"word_plural"	"turbin-likes"
			"word"	"headdresses"
			"word_plural"	"headdresseses"
			"word"	"flowing"
			"word_plural"	"flowings"
			"replacement"	"bobo dread"
			"replacement"	"bobo"
			"replacement"	"dread"
			"replacement_plural"	"bobo dread dem"
			"replacement_plural"	"all a bobo dread"
			"replacement_plural"	"bobo dem"
			"replacement_plural"	"all a bobo"
			"replacement_plural"	"bobos"
			"replacement_plural"	"dread dem"
			"replacement_plural"	"all a dread"
			"replacement_plural"	"dreads"
		}

		"1"
		{
			"word"	"comes"
			"word_plural"	"comeses"
			"replacement"	"boderation"
			"replacement_plural"	"boderation dem"
			"replacement_plural"	"all a boderation"
			"replacement_plural"	"boderations"
		}

		"1"
		{
			"word"	"greedy"
			"word_plural"	"greedies"
			"word"	"child"
			"word_plural"	"childs"
			"word"	"ate"
			"word_plural"	"ates"
			"word"	"too"
			"word_plural"	"toos"
			"word"	"much"
			"word_plural"	"muches"
			"word"	"kid"
			"word_plural"	"kids"
			"replacement"	"bong belly pickney"
			"replacement_plural"	"bong belly pickney dem"
			"replacement_plural"	"all a bong belly pickney"
		}

		"1"
		{
			"word"	"wonderful"
			"word_plural"	"wonderfuls"
			"replacement"	"boonoonoonous"
			"replacement_plural"	"boonoonoonous dem"
			"replacement_plural"	"all a boonoonoonous"
			"replacement_plural"	"boonoonoonouses"
		}

		"1"
		{
			"word"	"dancehall"
			"word_plural"	"dancehalls"
			"word"	"began"
			"word_plural"	"begans"
			"word"	"own"
			"word_plural"	"owns"
			"word"	"late"
			"word_plural"	"lates"
			"word"	"sounded"
			"word_plural"	"soundeds"
			"word"	"clubs"
			"word_plural"	"clubses"
			"word"	"street"
			"word_plural"	"streets"
			"word"	"parties"
			"word_plural"	"partieses"
			"replacement"	"booyaka!!!"
			"replacement_plural"	"booyaka!!! dem"
			"replacement_plural"	"all a booyaka!!!"
		}

		"1"
		{
			"word"	"smack"
			"word_plural"	"smacks"
			"word"	"hit"
			"word_plural"	"hits"
			"word"	"face"
			"word_plural"	"faces"
			"replacement"	"box"
			"replacement_plural"	"box dem"
			"replacement_plural"	"all a box"
			"replacement_plural"	"boxes"
		}

		"1"
		{
			"word"	"little"
			"word_plural"	"littles"
			"word"	"extra"
			"word_plural"	"extras"
			"replacement"	"braata"
			"replacement_plural"	"braata dem"
			"replacement_plural"	"all a braata"
			"replacement_plural"	"braatas"
		}

		"1"
		{
			"word"	"one's"
			"word_plural"	"one'ses"
			"word"	"fellow"
			"word_plural"	"fellows"
			"word"	"male"
			"word_plural"	"males"
			"word"	"rastas"
			"word_plural"	"rastases"
			"replacement"	"bredren"
			"replacement_plural"	"bredren dem"
			"replacement_plural"	"all a bredren"
			"replacement_plural"	"bredrens"
		}

		"1"
		{
			"word"	"angry"
			"word_plural"	"angries"
			"word"	"mad"
			"word_plural"	"mads"
			"word"	"irate"
			"word_plural"	"irates"
			"word"	"vexed"
			"word_plural"	"vexeds"
			"replacement"	"brindle"
			"replacement_plural"	"brindle dem"
			"replacement_plural"	"all a brindle"
			"replacement_plural"	"brindles"
		}

		"1"
		{
			"word"	"money"
			"word_plural"	"moneys"
			"word"	"cash"
			"word_plural"	"cashes"
			"word"	"title"
			"word_plural"	"titles"
			"word"	"given"
			"word_plural"	"givens"
			"word"	"supplying"
			"word_plural"	"supplyings"
			"word"	"woman"
			"word_plural"	"womans"
			"word"	"dough"
			"word_plural"	"doughs"
			"word"	"coins"
			"word_plural"	"coinses"
			"word"	"coin"
			"word_plural"	"coins"
			"replacement"	"brinks"
			"replacement_plural"	"brinks dem"
			"replacement_plural"	"all a brinks"
			"replacement_plural"	"brinkses"
		}

		"1"
		{
			"word"	"fool"
			"word_plural"	"fools"
			"replacement"	"bubu"
			"replacement_plural"	"bubu dem"
			"replacement_plural"	"all a bubu"
			"replacement_plural"	"bubus"
		}

		"1"
		{
			"word"	"home-made"
			"word_plural"	"home-mades"
			"word"	"gun"
			"word_plural"	"guns"
			"word"	"slave"
			"word_plural"	"slaves"
			"replacement"	"bucky"
			"replacement_plural"	"bucky dem"
			"replacement_plural"	"all a bucky"
			"replacement_plural"	"buckies"
		}

		"1"
		{
			"word"	"master"
			"word_plural"	"masters"
			"word"	"slaves"
			"word_plural"	"slaveses"
			"replacement"	"bucky massa"
			"replacement"	"bucky"
			"replacement"	"massa"
			"replacement_plural"	"bucky massa dem"
			"replacement_plural"	"all a bucky massa"
			"replacement_plural"	"bucky dem"
			"replacement_plural"	"all a bucky"
			"replacement_plural"	"buckies"
			"replacement_plural"	"massa dem"
			"replacement_plural"	"all a massa"
			"replacement_plural"	"massas"
		}

		"1"
		{
			"word"	"bird"
			"word_plural"	"birds"
			"replacement"	"bud"
			"replacement_plural"	"bud dem"
			"replacement_plural"	"all a bud"
			"replacement_plural"	"buds"
		}

		"1"
		{
			"word"	"fat"
			"word_plural"	"fats"
			"word"	"swollen"
			"word_plural"	"swollens"
			"word"	"blubbery"
			"word_plural"	"blubberies"
			"replacement"	"bufu-bufu"
			"replacement_plural"	"bufu-bufu dem"
			"replacement_plural"	"all a bufu-bufu"
			"replacement_plural"	"bufu-bufus"
		}

		"1"
		{
			"word"	"sloppy"
			"word_plural"	"sloppies"
			"word"	"dirty"
			"word_plural"	"dirties"
			"word"	"person"
			"word_plural"	"persons"
			"word"	"bum"
			"word_plural"	"bums"
			"word"	"tramp"
			"word_plural"	"tramps"
			"word"	"filthy"
			"word_plural"	"filthies"
			"word"	"grimy"
			"word_plural"	"grimies"
			"replacement"	"buguyaga"
			"replacement_plural"	"buguyaga dem"
			"replacement_plural"	"all a buguyaga"
			"replacement_plural"	"buguyagas"
		}

		"1"
		{
			"word"	"bully"
			"word_plural"	"bullies"
			"replacement"	"bull bucka"
			"replacement"	"bull"
			"replacement"	"bucka"
			"replacement_plural"	"bull bucka dem"
			"replacement_plural"	"all a bull bucka"
			"replacement_plural"	"bull dem"
			"replacement_plural"	"all a bull"
			"replacement_plural"	"bulls"
			"replacement_plural"	"bucka dem"
			"replacement_plural"	"all a bucka"
			"replacement_plural"	"buckas"
		}

		"1"
		{
			"word"	"comon"
			"word_plural"	"comons"
			"word"	"sugar"
			"word_plural"	"sugars"
			"word"	"flour"
			"word_plural"	"flours"
			"word"	"cookie"
			"word_plural"	"cookies"
			"word"	"small"
			"word_plural"	"smalls"
			"word"	"round"
			"word_plural"	"rounds"
			"word"	"cake"
			"word_plural"	"cakes"
			"word"	"sold"
			"word_plural"	"solds"
			"word"	"everywhere"
			"word_plural"	"everywheres"
			"replacement"	"bulla"
			"replacement_plural"	"bulla dem"
			"replacement_plural"	"all a bulla"
			"replacement_plural"	"bullas"
		}

		"1"
		{
			"word"	"have"
			"word_plural"	"haves"
			"word"	"one's"
			"word_plural"	"one'ses"
			"word"	"spouse"
			"word_plural"	"spouses"
			"word"	"girl"
			"word_plural"	"girls"
			"word"	"boy-friend"
			"word_plural"	"boy-friends"
			"word"	"cheat"
			"word_plural"	"cheats"
			"word"	"oneself"
			"word_plural"	"oneselfs"
			"word"	"cheated"
			"word_plural"	"cheateds"
			"word"	"something"
			"word_plural"	"somethings"
			"replacement"	"bumba"
			"replacement_plural"	"bumba dem"
			"replacement_plural"	"all a bumba"
			"replacement_plural"	"bumbas"
		}

		"1"
		{
			"word"	"blood"
			"word_plural"	"bloods"
			"word"	"curse"
			"word_plural"	"curses"
			"word"	"words"
			"word_plural"	"wordses"
			"replacement"	"ras"
			"replacement_plural"	"ras dem"
			"replacement_plural"	"all a ras"
			"replacement_plural"	"rases"
		}

		"1"
		{
			"word"	"meet"
			"word_plural"	"meets"
			"replacement"	"buck up"
			"replacement"	"buck"
			"replacement"	"up"
			"replacement_plural"	"buck up dem"
			"replacement_plural"	"all a buck up"
			"replacement_plural"	"buck dem"
			"replacement_plural"	"all a buck"
			"replacement_plural"	"bucks"
			"replacement_plural"	"up dem"
			"replacement_plural"	"all a up"
			"replacement_plural"	"ups"
		}

		"1"
		{
			"word"	"bottom"
			"word_plural"	"bottoms"
			"replacement"	"bumbo"
			"replacement_plural"	"bumbo dem"
			"replacement_plural"	"all a bumbo"
			"replacement_plural"	"bumbos"
		}

		"1"
		{
			"word"	"person"
			"word_plural"	"persons"
			"word"	"class"
			"word_plural"	"classes"
			"replacement"	"butoo"
			"replacement_plural"	"butoo dem"
			"replacement_plural"	"all a butoo"
			"replacement_plural"	"butoos"
		}

		"1"
		{
			"word"	"burn"
			"word_plural"	"burns"
			"replacement"	"bun"
			"replacement_plural"	"bun dem"
			"replacement_plural"	"all a bun"
			"replacement_plural"	"buns"
		}

		"1"
		{
			"word"	"knock"
			"word_plural"	"knocks"
			"word"	"bump"
			"word_plural"	"bumps"
			"word"	"against"
			"word_plural"	"againsts"
			"replacement"	"bunks"
			"replacement_plural"	"bunks dem"
			"replacement_plural"	"all a bunks"
			"replacement_plural"	"bunkses"
		}

		"1"
		{
			"word"	"catch"
			"word_plural"	"catches"
			"word"	"rest"
			"word_plural"	"rests"
			"word"	"take"
			"word_plural"	"takes"
			"word"	"nap"
			"word_plural"	"naps"
			"replacement"	"bunks mi res"
			"replacement_plural"	"bunks mi res dem"
			"replacement_plural"	"all a bunks mi res"
		}

		"1"
		{
			"word"	"cat"
			"word_plural"	"cats"
			"word"	"woman's"
			"word_plural"	"woman'ses"
			"word"	"genitals"
			"word_plural"	"genitalses"
			"replacement"	"bwoy"
			"replacement_plural"	"bwoy dem"
			"replacement_plural"	"all a bwoy"
			"replacement_plural"	"bwoys"
		}

		"1"
		{
			"word"	"spinach"
			"word_plural"	"spinaches"
			"word"	"stew"
			"word_plural"	"stews"
			"replacement"	"callalou"
			"replacement_plural"	"callalou dem"
			"replacement_plural"	"all a callalou"
			"replacement_plural"	"callalous"
		}

		"1"
		{
			"word"	"fool"
			"word_plural"	"fools"
			"word"	"someone"
			"word_plural"	"someones"
			"replacement"	"card"
			"replacement_plural"	"card dem"
			"replacement_plural"	"all a card"
			"replacement_plural"	"cards"
		}

		"1"
		{
			"word"	"sekkle"
			"word_plural"	"sekkles"
			"word"	"stop"
			"word_plural"	"stops"
			"word"	"everything"
			"word_plural"	"everythings"
			"word"	"relax"
			"word_plural"	"relaxes"
			"replacement"	"cease"
			"replacement_plural"	"cease dem"
			"replacement_plural"	"all a cease"
			"replacement_plural"	"ceases"
		}

		"1"
		{
			"word"	"ubiquitous"
			"word_plural"	"ubiquitouses"
			"word"	"vine"
			"word_plural"	"vines"
			"word"	"boiling"
			"word_plural"	"boilings"
			"word"	"medicinal"
			"word_plural"	"medicinals"
			"word"	"tea"
			"word_plural"	"teas"
			"word"	"bathing"
			"word_plural"	"bathings"
			"replacement"	"cerace"
			"replacement_plural"	"cerace dem"
			"replacement_plural"	"all a cerace"
			"replacement_plural"	"ceraces"
		}

		"1"
		{
			"word"	"disdainful"
			"word_plural"	"disdainfuls"
			"word"	"expletive"
			"word_plural"	"expletives"
			"word"	"pshaw"
			"word_plural"	"pshaws"
			"word"	"very"
			"word_plural"	"veries"
			"word"	"mild"
			"word_plural"	"milds"
			"word"	"explanation"
			"word_plural"	"explanations"
			"word"	"expressing"
			"word_plural"	"expressings"
			"word"	"impatience"
			"word_plural"	"impatiences"
			"word"	"vexation"
			"word_plural"	"vexations"
			"word"	"disappointment"
			"word_plural"	"disappointments"
			"replacement"	"cha!"
			"replacement_plural"	"cha! dem"
			"replacement_plural"	"all a cha!"
		}

		"1"
		{
			"word"	"messy"
			"word_plural"	"messies"
			"word"	"disorderly"
			"word_plural"	"disorderlies"
			"word"	"untidy"
			"word_plural"	"untidies"
			"replacement"	"chaka-chaka"
			"replacement_plural"	"chaka-chaka dem"
			"replacement_plural"	"all a chaka-chaka"
			"replacement_plural"	"chaka-chakas"
		}

		"1"
		{
			"word"	"marijuana"
			"word_plural"	"marijuanas"
			"word"	"weed"
			"word_plural"	"weeds"
			"word"	"chillum"
			"word_plural"	"chillums"
			"word"	"pipe"
			"word_plural"	"pipes"
			"word"	"smoking"
			"word_plural"	"smokings"
			"word"	"usually"
			"word_plural"	"usuallies"
			"word"	"made"
			"word_plural"	"mades"
			"replacement"	"chalice"
			"replacement_plural"	"chalice dem"
			"replacement_plural"	"all a chalice"
			"replacement_plural"	"chalices"
		}

		"1"
		{
			"word"	"female"
			"word_plural"	"females"
			"word"	"sexual"
			"word_plural"	"sexuals"
			"word"	"prowess"
			"word_plural"	"prowesses"
			"replacement"	"champion"
			"replacement_plural"	"champion dem"
			"replacement_plural"	"all a champion"
			"replacement_plural"	"champions"
		}

		"1"
		{
			"word"	"sing"
			"word_plural"	"sings"
			"replacement"	"chant"
			"replacement_plural"	"chant dem"
			"replacement_plural"	"all a chant"
			"replacement_plural"	"chants"
		}

		"1"
		{
			"word"	"just"
			"word_plural"	"justs"
			"word"	"well"
			"word_plural"	"wells"
			"replacement"	"cheap"
			"replacement_plural"	"cheap dem"
			"replacement_plural"	"all a cheap"
			"replacement_plural"	"cheaps"
		}

		"1"
		{
			"word"	"gay"
			"word_plural"	"gays"
			"replacement"	"chi chi man"
			"replacement_plural"	"chi chi man dem"
			"replacement_plural"	"all a chi chi man"
		}

		"1"
		{
			"word"	"chamber"
			"word_plural"	"chambers"
			"word"	"pot"
			"word_plural"	"pots"
			"replacement"	"chimmy"
			"replacement_plural"	"chimmy dem"
			"replacement_plural"	"all a chimmy"
			"replacement_plural"	"chimmies"
		}

		"1"
		{
			"word"	"very"
			"word_plural"	"veries"
			"word"	"mild"
			"word_plural"	"milds"
			"word"	"explanation"
			"word_plural"	"explanations"
			"word"	"expressing"
			"word_plural"	"expressings"
			"word"	"impatience"
			"word_plural"	"impatiences"
			"word"	"vexation"
			"word_plural"	"vexations"
			"word"	"disappointment"
			"word_plural"	"disappointments"
			"replacement"	"cho"
			"replacement_plural"	"cho dem"
			"replacement_plural"	"all a cho"
			"replacement_plural"	"chos"
		}

		"1"
		{
			"word"	"hit"
			"word_plural"	"hits"
			"word"	"break"
			"word_plural"	"breaks"
			"word"	"stride"
			"word_plural"	"strides"
			"replacement"	"clap"
			"replacement_plural"	"clap dem"
			"replacement_plural"	"all a clap"
			"replacement_plural"	"claps"
		}

		"1"
		{
			"word"	"potato-like"
			"word_plural"	"potato-likes"
			"word"	"edible"
			"word_plural"	"edibles"
			"word"	"root"
			"word_plural"	"roots"
			"word"	"known"
			"word_plural"	"knowns"
			"word"	"elsewhere"
			"word_plural"	"elsewheres"
			"word"	"taro"
			"word_plural"	"taros"
			"word"	"eddo"
			"word_plural"	"eddos"
			"replacement"	"coco"
			"replacement_plural"	"coco dem"
			"replacement_plural"	"all a coco"
			"replacement_plural"	"cocos"
		}

		"1"
		{
			"word"	"another"
			"word_plural"	"anothers"
			"word"	"leprosy"
			"word_plural"	"leprosies"
			"replacement"	"cocobay"
			"replacement_plural"	"cocobay dem"
			"replacement_plural"	"all a cocobay"
			"replacement_plural"	"cocobays"
		}

		"1"
		{
			"word"	"money"
			"word_plural"	"moneys"
			"word"	"cash"
			"word_plural"	"cashes"
			"word"	"dough"
			"word_plural"	"doughs"
			"word"	"coins"
			"word_plural"	"coinses"
			"word"	"coin"
			"word_plural"	"coins"
			"replacement"	"coil"
			"replacement_plural"	"coil dem"
			"replacement_plural"	"all a coil"
			"replacement_plural"	"coils"
		}

		"1"
		{
			"word"	"humiliate"
			"word_plural"	"humiliates"
			"word"	"be-little"
			"word_plural"	"be-littles"
			"replacement"	"cold i up"
			"replacement_plural"	"cold i up dem"
			"replacement_plural"	"all a cold i up"
		}

		"1"
		{
			"word"	"get"
			"word_plural"	"gets"
			"word"	"ready"
			"word_plural"	"readies"
			"replacement"	"come dung"
			"replacement"	"come"
			"replacement"	"dung"
			"replacement_plural"	"come dung dem"
			"replacement_plural"	"all a come dung"
			"replacement_plural"	"come dem"
			"replacement_plural"	"all a come"
			"replacement_plural"	"comes"
			"replacement_plural"	"dung dem"
			"replacement_plural"	"all a dung"
			"replacement_plural"	"dungs"
		}

		"1"
		{
			"word"	"seem"
			"word_plural"	"seems"
			"replacement"	"come een like"
			"replacement_plural"	"come een like dem"
			"replacement_plural"	"all a come een like"
		}

		"1"
		{
			"word"	"charge"
			"word_plural"	"charges"
			"word"	"responsible"
			"word_plural"	"responsibles"
			"word"	"own"
			"word_plural"	"owns"
			"replacement"	"control"
			"replacement_plural"	"control dem"
			"replacement_plural"	"all a control"
			"replacement_plural"	"controls"
		}

		"1"
		{
			"word"	"pon"
			"word_plural"	"pons"
			"replacement"	"coo"
			"replacement_plural"	"coo dem"
			"replacement_plural"	"all a coo"
			"replacement_plural"	"coos"
		}

		"1"
		{
			"word"	"goodbye"
			"word_plural"	"goodbyes"
			"word"	"bye"
			"word_plural"	"byes"
			"word"	"usually"
			"word_plural"	"usuallies"
			"word"	"departure"
			"word_plural"	"departures"
			"word"	"long"
			"word_plural"	"longs"
			"word"	"journey"
			"word_plural"	"journeys"
			"word"	"have"
			"word_plural"	"haves"
			"word"	"safe"
			"word_plural"	"safes"
			"word"	"trip"
			"word_plural"	"trips"
			"replacement"	"cool runnings"
			"replacement"	"cool"
			"replacement"	"runnings"
			"replacement_plural"	"cool runnings dem"
			"replacement_plural"	"all a cool runnings"
			"replacement_plural"	"cool dem"
			"replacement_plural"	"all a cool"
			"replacement_plural"	"cools"
			"replacement_plural"	"runnings dem"
			"replacement_plural"	"all a runnings"
			"replacement_plural"	"runningses"
		}

		"1"
		{
			"word"	"traditional"
			"word_plural"	"traditionals"
			"word"	"epithet"
			"word_plural"	"epithets"
			"word"	"east"
			"word_plural"	"easts"
			"word"	"indians"
			"word_plural"	"indianses"
			"replacement"	"coolie"
			"replacement_plural"	"coolie dem"
			"replacement_plural"	"all a coolie"
			"replacement_plural"	"coolies"
		}

		"1"
		{
			"word"	"here"
			"word_plural"	"heres"
			"replacement"	"come yah"
			"replacement"	"come"
			"replacement"	"yah"
			"replacement_plural"	"come yah dem"
			"replacement_plural"	"all a come yah"
			"replacement_plural"	"come dem"
			"replacement_plural"	"all a come"
			"replacement_plural"	"comes"
			"replacement_plural"	"yah dem"
			"replacement_plural"	"all a yah"
			"replacement_plural"	"yahs"
		}

		"1"
		{
			"word"	"jammed"
			"word_plural"	"jammeds"
			"word"	"filled"
			"word_plural"	"filleds"
			"word"	"crowded"
			"word_plural"	"crowdeds"
			"replacement"	"cork up"
			"replacement"	"cork"
			"replacement"	"up"
			"replacement_plural"	"cork up dem"
			"replacement_plural"	"all a cork up"
			"replacement_plural"	"cork dem"
			"replacement_plural"	"all a cork"
			"replacement_plural"	"corks"
			"replacement_plural"	"up dem"
			"replacement_plural"	"all a up"
			"replacement_plural"	"ups"
		}

		"1"
		{
			"word"	"verb"
			"word_plural"	"verbs"
			"word"	"support"
			"word_plural"	"supports"
			"word"	"something"
			"word_plural"	"somethings"
			"word"	"else"
			"word_plural"	"elses"
			"word"	"forked"
			"word_plural"	"forkeds"
			"word"	"stick"
			"word_plural"	"sticks"
			"replacement"	"cotch"
			"replacement_plural"	"cotch dem"
			"replacement_plural"	"all a cotch"
			"replacement_plural"	"cotches"
		}

		"1"
		{
			"word"	"roll"
			"word_plural"	"rolls"
			"word"	"cloth"
			"word_plural"	"cloths"
			"word"	"vegetation"
			"word_plural"	"vegetations"
			"word"	"placed"
			"word_plural"	"placeds"
			"word"	"top"
			"word_plural"	"tops"
			"word"	"cushion"
			"word_plural"	"cushions"
			"word"	"skull"
			"word_plural"	"skulls"
			"replacement"	"cotta"
			"replacement_plural"	"cotta dem"
			"replacement_plural"	"all a cotta"
			"replacement_plural"	"cottas"
		}

		"1"
		{
			"word"	"aside"
			"word_plural"	"asides"
			"replacement"	"crab"
			"replacement_plural"	"crab dem"
			"replacement_plural"	"all a crab"
			"replacement_plural"	"crabs"
		}

		"1"
		{
			"word"	"greedy"
			"word_plural"	"greedies"
			"replacement"	"craven"
			"replacement_plural"	"craven dem"
			"replacement_plural"	"all a craven"
			"replacement_plural"	"cravens"
		}

		"1"
		{
			"word"	"someone"
			"word_plural"	"someones"
			"word"	"wants"
			"word_plural"	"wantses"
			"word"	"everything"
			"word_plural"	"everythings"
			"word"	"get"
			"word_plural"	"gets"
			"word"	"can't"
			"word_plural"	"can'ts"
			"word"	"manage"
			"word_plural"	"manages"
			"replacement"	"craven choke puppy"
			"replacement_plural"	"craven choke puppy dem"
			"replacement_plural"	"all a craven choke puppy"
		}

		"1"
		{
			"word"	"throughout"
			"word_plural"	"throughouts"
			"word"	"fear"
			"word_plural"	"fears"
			"word"	"cuttin'"
			"word_plural"	"cuttin's"
			"word"	"edge"
			"word_plural"	"edges"
			"word"	"livin'"
			"word_plural"	"livin's"
			"word"	"foe"
			"word_plural"	"foes"
			"replacement"	"creation stepper"
			"replacement"	"creation"
			"replacement"	"stepper"
			"replacement_plural"	"creation stepper dem"
			"replacement_plural"	"all a creation stepper"
			"replacement_plural"	"creation dem"
			"replacement_plural"	"all a creation"
			"replacement_plural"	"creations"
			"replacement_plural"	"stepper dem"
			"replacement_plural"	"all a stepper"
			"replacement_plural"	"steppers"
		}

		"1"
		{
			"word"	"crisp"
			"word_plural"	"crisps"
			"replacement"	"cris"
			"replacement_plural"	"cris dem"
			"replacement_plural"	"all a cris"
			"replacement_plural"	"crises"
		}

		"1"
		{
			"word"	"crisp"
			"word_plural"	"crisps"
			"word"	"brand-new"
			"word_plural"	"brand-news"
			"replacement"	"crissars"
			"replacement_plural"	"crissars dem"
			"replacement_plural"	"all a crissars"
			"replacement_plural"	"crissarses"
		}

		"1"
		{
			"word"	"very"
			"word_plural"	"veries"
			"word"	"sack"
			"word_plural"	"sacks"
			"word"	"made"
			"word_plural"	"mades"
			"word"	"coarse"
			"word_plural"	"coarses"
			"word"	"cloth"
			"word_plural"	"cloths"
			"word"	"burlap"
			"word_plural"	"burlaps"
			"replacement"	"crocus bag"
			"replacement"	"crocus"
			"replacement"	"bag"
			"replacement_plural"	"crocus bag dem"
			"replacement_plural"	"all a crocus bag"
			"replacement_plural"	"crocus dem"
			"replacement_plural"	"all a crocus"
			"replacement_plural"	"crocuses"
			"replacement_plural"	"bag dem"
			"replacement_plural"	"all a bag"
			"replacement_plural"	"bags"
		}

		"1"
		{
			"word"	"problems"
			"word_plural"	"problemses"
			"word"	"vexations"
			"word_plural"	"vexationses"
			"word"	"trials"
			"word_plural"	"trialses"
			"replacement"	"crosses"
			"replacement_plural"	"crosses dem"
			"replacement_plural"	"all a crosses"
			"replacement_plural"	"crosseses"
		}

		"1"
		{
			"word"	"serious"
			"word_plural"	"seriouses"
			"word"	"great"
			"word_plural"	"greats"
			"replacement"	"crucial"
			"replacement_plural"	"crucial dem"
			"replacement_plural"	"all a crucial"
			"replacement_plural"	"crucials"
		}

		"1"
		{
			"word"	"verb"
			"word_plural"	"verbs"
			"word"	"look"
			"word_plural"	"looks"
			"replacement"	"cu"
			"replacement_plural"	"cu dem"
			"replacement_plural"	"all a cu"
			"replacement_plural"	"cus"
		}

		"1"
		{
			"word"	"look"
			"word_plural"	"looks"
			"word"	"there"
			"word_plural"	"theres"
			"replacement"	"cu deh!"
			"replacement_plural"	"cu deh! dem"
			"replacement_plural"	"all a cu deh!"
		}

		"1"
		{
			"word"	"look"
			"word_plural"	"looks"
			"replacement"	"cu pan"
			"replacement"	"cu"
			"replacement"	"pan"
			"replacement_plural"	"cu pan dem"
			"replacement_plural"	"all a cu pan"
			"replacement_plural"	"cu dem"
			"replacement_plural"	"all a cu"
			"replacement_plural"	"cus"
			"replacement_plural"	"pan dem"
			"replacement_plural"	"all a pan"
			"replacement_plural"	"pans"
		}

		"1"
		{
			"word"	"look"
			"word_plural"	"looks"
			"word"	"here"
			"word_plural"	"heres"
			"replacement"	"cu ya!"
			"replacement_plural"	"cu ya! dem"
			"replacement_plural"	"all a cu ya!"
		}

		"1"
		{
			"word"	"say"
			"word_plural"	"says"
			"word"	"look"
			"word_plural"	"looks"
			"replacement"	"cu yu"
			"replacement"	"cu"
			"replacement"	"yu"
			"replacement_plural"	"cu yu dem"
			"replacement_plural"	"all a cu yu"
			"replacement_plural"	"cu dem"
			"replacement_plural"	"all a cu"
			"replacement_plural"	"cus"
			"replacement_plural"	"yu dem"
			"replacement_plural"	"all a yu"
			"replacement_plural"	"yus"
		}

		"1"
		{
			"word"	"covetous"
			"word_plural"	"covetouses"
			"replacement"	"cubbitch"
			"replacement_plural"	"cubbitch dem"
			"replacement_plural"	"all a cubbitch"
			"replacement_plural"	"cubbitches"
		}

		"1"
		{
			"word"	"reflecting"
			"word_plural"	"reflectings"
			"word"	"pertaining"
			"word_plural"	"pertainings"
			"word"	"values"
			"word_plural"	"valueses"
			"word"	"traditions"
			"word_plural"	"traditionses"
			"word"	"highly"
			"word_plural"	"highlies"
			"word"	"respected"
			"word_plural"	"respecteds"
			"word"	"rastas"
			"word_plural"	"rastases"
			"replacement"	"culture"
			"replacement_plural"	"culture dem"
			"replacement_plural"	"all a culture"
			"replacement_plural"	"cultures"
		}

		"1"
		{
			"word"	"quarrel"
			"word_plural"	"quarrels"
			"word"	"fracas"
			"word_plural"	"fracases"
			"word"	"lots"
			"word_plural"	"lotses"
			"word"	"cursing"
			"word_plural"	"cursings"
			"replacement"	"cuss-cuss"
			"replacement_plural"	"cuss-cuss dem"
			"replacement_plural"	"all a cuss-cuss"
			"replacement_plural"	"cuss-cusses"
		}

		"1"
		{
			"word"	"somebody"
			"word_plural"	"somebodies"
			"word"	"very"
			"word_plural"	"veries"
			"word"	"expressing"
			"word_plural"	"expressings"
			"word"	"scorn"
			"word_plural"	"scorns"
			"word"	"contempt"
			"word_plural"	"contempts"
			"replacement"	"cut yai"
			"replacement"	"cut"
			"replacement"	"yai"
			"replacement_plural"	"cut yai dem"
			"replacement_plural"	"all a cut yai"
			"replacement_plural"	"cut dem"
			"replacement_plural"	"all a cut"
			"replacement_plural"	"cuts"
			"replacement_plural"	"yai dem"
			"replacement_plural"	"all a yai"
			"replacement_plural"	"yais"
		}

		"1"
		{
			"word"	"pipe"
			"word_plural"	"pipes"
			"word"	"communal"
			"word_plural"	"communals"
			"word"	"smoking"
			"word_plural"	"smokings"
			"replacement"	"cutchie"
			"replacement_plural"	"cutchie dem"
			"replacement_plural"	"all a cutchie"
			"replacement_plural"	"cutchies"
		}

		"1"
		{
			"word"	"care"
			"word_plural"	"cares"
			"replacement"	"cya"
			"replacement_plural"	"cya dem"
			"replacement_plural"	"all a cya"
			"replacement_plural"	"cyas"
		}

		"1"
		{
			"word"	"can't"
			"word_plural"	"can'ts"
			"replacement"	"cyaan"
			"replacement_plural"	"cyaan dem"
			"replacement_plural"	"all a cyaan"
			"replacement_plural"	"cyaans"
		}

		"1"
		{
			"word"	"carry"
			"word_plural"	"carries"
			"replacement"	"cyai"
			"replacement_plural"	"cyai dem"
			"replacement_plural"	"all a cyai"
			"replacement_plural"	"cyais"
		}

		"1"
		{
			"word"	"split"
			"word_plural"	"splits"
			"word"	"peas"
			"word_plural"	"peases"
			"word"	"usually"
			"word_plural"	"usuallies"
			"word"	"thick"
			"word_plural"	"thicks"
			"word"	"soup"
			"word_plural"	"soups"
			"replacement"	"daal"
			"replacement_plural"	"daal dem"
			"replacement_plural"	"all a daal"
			"replacement_plural"	"daals"
		}

		"1"
		{
			"word"	"father"
			"word_plural"	"fathers"
			"replacement"	"dada"
			"replacement_plural"	"dada dem"
			"replacement_plural"	"all a dada"
			"replacement_plural"	"dadas"
		}

		"1"
		{
			"word"	"executive"
			"word_plural"	"executives"
			"word"	"zig-zag"
			"word_plural"	"zig-zags"
			"word"	"movements"
			"word_plural"	"movementses"
			"word"	"foot"
			"word_plural"	"foots"
			"word"	"ride"
			"word_plural"	"rides"
			"word"	"bicycle"
			"word_plural"	"bicycles"
			"word"	"motorbike"
			"word_plural"	"motorbikes"
			"word"	"weaving"
			"word_plural"	"weavings"
			"word"	"motion"
			"word_plural"	"motions"
			"word"	"ones"
			"word_plural"	"oneses"
			"replacement"	"dally"
			"replacement_plural"	"dally dem"
			"replacement_plural"	"all a dally"
			"replacement_plural"	"dallies"
		}

		"1"
		{
			"word"	"highest"
			"word_plural"	"highests"
			"word"	"don's"
			"word_plural"	"don'ses"
			"replacement"	"dan dada"
			"replacement"	"dan"
			"replacement"	"dada"
			"replacement_plural"	"dan dada dem"
			"replacement_plural"	"all a dan dada"
			"replacement_plural"	"dan dem"
			"replacement_plural"	"all a dan"
			"replacement_plural"	"dans"
			"replacement_plural"	"dada dem"
			"replacement_plural"	"all a dada"
			"replacement_plural"	"dadas"
		}

		"1"
		{
			"word"	"sunglasses"
			"word_plural"	"sunglasseses"
			"replacement"	"darkers"
			"replacement_plural"	"darkers dem"
			"replacement_plural"	"all a darkers"
			"replacement_plural"	"darkerses"
		}

		"1"
		{
			"word"	"yam-like"
			"word_plural"	"yam-likes"
			"word"	"root"
			"word_plural"	"roots"
			"word"	"slightly"
			"word_plural"	"slightlies"
			"word"	"greyish"
			"word_plural"	"greyishes"
			"word"	"cooked"
			"word_plural"	"cookeds"
			"replacement"	"dasheen"
			"replacement_plural"	"dasheen dem"
			"replacement_plural"	"all a dasheen"
			"replacement_plural"	"dasheens"
		}

		"1"
		{
			"word"	"girl"
			"word_plural"	"girls"
			"word"	"woman"
			"word_plural"	"womans"
			"word"	"sister"
			"word_plural"	"sisters"
			"word"	"girlfriend"
			"word_plural"	"girlfriends"
			"replacement"	"dawta"
			"replacement_plural"	"dawta dem"
			"replacement_plural"	"all a dawta"
			"replacement_plural"	"dawtas"
		}

		"1"
		{
			"word"	"can't"
			"word_plural"	"can'ts"
			"word"	"perform"
			"word_plural"	"performs"
			"word"	"sexually"
			"word_plural"	"sexuallies"
			"replacement"	"dead hood"
			"replacement"	"dead"
			"replacement"	"hood"
			"replacement_plural"	"dead hood dem"
			"replacement_plural"	"all a dead hood"
			"replacement_plural"	"dead dem"
			"replacement_plural"	"all a dead"
			"replacement_plural"	"deads"
			"replacement_plural"	"hood dem"
			"replacement_plural"	"all a hood"
			"replacement_plural"	"hoods"
		}

		"1"
		{
			"word"	"meat"
			"word_plural"	"meats"
			"word"	"by-products"
			"word_plural"	"by-productses"
			"replacement"	"deaders"
			"replacement_plural"	"deaders dem"
			"replacement_plural"	"all a deaders"
			"replacement_plural"	"deaderses"
		}

		"1"
		{
			"word"	"decent"
			"word_plural"	"decents"
			"replacement"	"deestant"
			"replacement_plural"	"deestant dem"
			"replacement_plural"	"all a deestant"
			"replacement_plural"	"deestants"
		}

		"1"
		{
			"word"	"dege-dege"
			"word_plural"	"dege-deges"
			"word"	"adjective"
			"word_plural"	"adjectives"
			"word"	"little"
			"word_plural"	"littles"
			"word"	"skimpy"
			"word_plural"	"skimpies"
			"word"	"measly"
			"word_plural"	"measlies"
			"word"	"only"
			"word_plural"	"onlies"
			"replacement"	"dege"
			"replacement_plural"	"dege dem"
			"replacement_plural"	"all a dege"
			"replacement_plural"	"deges"
		}

		"1"
		{
			"word"	"there"
			"word_plural"	"theres"
			"replacement"	"deh"
			"replacement_plural"	"deh dem"
			"replacement_plural"	"all a deh"
			"replacement_plural"	"dehs"
		}

		"1"
		{
			"word"	"pon"
			"word_plural"	"pons"
			"replacement"	"dey"
			"replacement_plural"	"dey dem"
			"replacement_plural"	"all a dey"
			"replacement_plural"	"deys"
		}

		"1"
		{
			"word"	"dangerous"
			"word_plural"	"dangerouses"
			"word"	"thorn"
			"word_plural"	"thorns"
			"word"	"bore"
			"word_plural"	"bores"
			"replacement"	"dildo macca"
			"replacement"	"dildo"
			"replacement"	"macca"
			"replacement_plural"	"dildo macca dem"
			"replacement_plural"	"all a dildo macca"
			"replacement_plural"	"dildo dem"
			"replacement_plural"	"all a dildo"
			"replacement_plural"	"dildos"
			"replacement_plural"	"macca dem"
			"replacement_plural"	"all a macca"
			"replacement_plural"	"maccas"
		}

		"1"
		{
			"word"	"kind"
			"word_plural"	"kinds"
			"word"	"traditional"
			"word_plural"	"traditionals"
			"word"	"dance"
			"word_plural"	"dances"
			"word"	"funerals"
			"word_plural"	"funeralses"
			"word"	"nine"
			"word_plural"	"nines"
			"word"	"nights"
			"word_plural"	"nightses"
			"replacement"	"dinki"
			"replacement_plural"	"dinki dem"
			"replacement_plural"	"all a dinki"
			"replacement_plural"	"dinkis"
		}

		"1"
		{
			"word"	"verb"
			"word_plural"	"verbs"
			"word"	"rain"
			"word_plural"	"rains"
			"replacement"	"djew"
			"replacement_plural"	"djew dem"
			"replacement_plural"	"all a djew"
			"replacement_plural"	"djews"
		}

		"1"
		{
			"word"	"person"
			"word_plural"	"persons"
			"word"	"cruel"
			"word_plural"	"cruels"
			"replacement"	"dogheart"
			"replacement_plural"	"dogheart dem"
			"replacement_plural"	"all a dogheart"
			"replacement_plural"	"doghearts"
		}

		"1"
		{
			"word"	"describe"
			"word_plural"	"describes"
			"word"	"dessert"
			"word_plural"	"desserts"
			"word"	"cooked"
			"word_plural"	"cookeds"
			"word"	"banana"
			"word_plural"	"bananas"
			"word"	"leaves"
			"word_plural"	"leaveses"
			"replacement"	"dokunu"
			"replacement_plural"	"dokunu dem"
			"replacement_plural"	"all a dokunu"
			"replacement_plural"	"dokunus"
		}

		"1"
		{
			"word"	"executive"
			"word_plural"	"executives"
			"word"	"zig-zag"
			"word_plural"	"zig-zags"
			"word"	"movements"
			"word_plural"	"movementses"
			"replacement"	"dolly"
			"replacement_plural"	"dolly dem"
			"replacement_plural"	"all a dolly"
			"replacement_plural"	"dollies"
		}

		"1"
		{
			"word"	"respected"
			"word_plural"	"respecteds"
			"word"	"master"
			"word_plural"	"masters"
			"word"	"situation"
			"word_plural"	"situations"
			"replacement"	"don"
			"replacement_plural"	"don dem"
			"replacement_plural"	"all a don"
			"replacement_plural"	"dons"
		}

		"1"
		{
			"word"	"most"
			"word_plural"	"mosts"
			"word"	"associated"
			"word_plural"	"associateds"
			"word"	"late"
			"word_plural"	"lates"
			"word"	"dancehall"
			"word_plural"	"dancehalls"
			"word"	"artist"
			"word_plural"	"artists"
			"word"	"super"
			"word_plural"	"supers"
			"word"	"cat"
			"word_plural"	"cats"
			"word"	"popularized"
			"word_plural"	"popularizeds"
			"word"	"dadda"
			"word_plural"	"daddas"
			"word"	"song"
			"word_plural"	"songs"
			"replacement"	"don dada"
			"replacement"	"don"
			"replacement"	"dada"
			"replacement_plural"	"don dada dem"
			"replacement_plural"	"all a don dada"
			"replacement_plural"	"don dem"
			"replacement_plural"	"all a don"
			"replacement_plural"	"dons"
			"replacement_plural"	"dada dem"
			"replacement_plural"	"all a dada"
			"replacement_plural"	"dadas"
		}

		"1"
		{
			"word"	"albino"
			"word_plural"	"albinos"
			"replacement"	"doondoos"
			"replacement_plural"	"doondoos dem"
			"replacement_plural"	"all a doondoos"
			"replacement_plural"	"doondooses"
		}

		"1"
		{
			"word"	"preferred"
			"word_plural"	"preferreds"
			"word"	"oppressor"
			"word_plural"	"oppressors"
			"replacement"	"downpressor"
			"replacement_plural"	"downpressor dem"
			"replacement_plural"	"all a downpressor"
			"replacement_plural"	"downpressors"
		}

		"1"
		{
			"word"	"dirty"
			"word_plural"	"dirties"
			"word"	"dirt"
			"word_plural"	"dirts"
			"word"	"earth"
			"word_plural"	"earths"
			"word"	"draw"
			"word_plural"	"draws"
			"word"	"act"
			"word_plural"	"acts"
			"word"	"fooling"
			"word_plural"	"foolings"
			"word"	"someone"
			"word_plural"	"someones"
			"word"	"filthy"
			"word_plural"	"filthies"
			"word"	"grimy"
			"word_plural"	"grimies"
			"replacement"	"doti"
			"replacement_plural"	"doti dem"
			"replacement_plural"	"all a doti"
			"replacement_plural"	"dotis"
		}

		"1"
		{
			"word"	"friendly"
			"word_plural"	"friendlies"
			"word"	"fellow"
			"word_plural"	"fellows"
			"replacement"	"dready"
			"replacement_plural"	"dready dem"
			"replacement_plural"	"all a dready"
			"replacement_plural"	"dreadies"
		}

		"1"
		{
			"word"	"electronic"
			"word_plural"	"electronics"
			"word"	"music"
			"word_plural"	"musics"
			"word"	"created"
			"word_plural"	"createds"
			"word"	"skillful"
			"word_plural"	"skillfuls"
			"word"	"artistic"
			"word_plural"	"artistics"
			"word"	"re-engineering"
			"word_plural"	"re-engineerings"
			"word"	"recorded"
			"word_plural"	"recordeds"
			"word"	"tracks"
			"word_plural"	"trackses"
			"replacement"	"dub"
			"replacement_plural"	"dub dem"
			"replacement_plural"	"all a dub"
			"replacement_plural"	"dubs"
		}

		"1"
		{
			"word"	"pre-release"
			"word_plural"	"pre-releases"
			"word"	"copy"
			"word_plural"	"copies"
			"word"	"record"
			"word_plural"	"records"
			"word"	"produced"
			"word_plural"	"produceds"
			"word"	"exclusively"
			"word_plural"	"exclusivelies"
			"word"	"specific"
			"word_plural"	"specifics"
			"replacement"	"dub plate"
			"replacement"	"dub"
			"replacement"	"plate"
			"replacement_plural"	"dub plate dem"
			"replacement_plural"	"all a dub plate"
			"replacement_plural"	"dub dem"
			"replacement_plural"	"all a dub"
			"replacement_plural"	"dubs"
			"replacement_plural"	"plate dem"
			"replacement_plural"	"all a plate"
			"replacement_plural"	"plates"
		}

		"1"
		{
			"word"	"white"
			"word_plural"	"whites"
			"word"	"ants"
			"word_plural"	"antses"
			"word"	"termites"
			"word_plural"	"termiteses"
			"replacement"	"duck-ants"
			"replacement_plural"	"duck-ants dem"
			"replacement_plural"	"all a duck-ants"
			"replacement_plural"	"duck-antses"
		}

		"1"
		{
			"word"	"sweet"
			"word_plural"	"sweets"
			"word"	"corn-meal"
			"word_plural"	"corn-meals"
			"word"	"dumplings"
			"word_plural"	"dumplingses"
			"word"	"boiled"
			"word_plural"	"boileds"
			"word"	"wrapped"
			"word_plural"	"wrappeds"
			"word"	"leaves"
			"word_plural"	"leaveses"
			"replacement"	"dukunu"
			"replacement_plural"	"dukunu dem"
			"replacement_plural"	"all a dukunu"
			"replacement_plural"	"dukunus"
		}

		"1"
		{
			"word"	"albino"
			"word_plural"	"albinos"
			"replacement"	"dundus"
			"replacement_plural"	"dundus dem"
			"replacement_plural"	"all a dundus"
			"replacement_plural"	"dunduses"
		}

		"1"
		{
			"word"	"ghost"
			"word_plural"	"ghosts"
			"word"	"spirit"
			"word_plural"	"spirits"
			"word"	"apparition"
			"word_plural"	"apparitions"
			"replacement"	"duppy"
			"replacement_plural"	"duppy dem"
			"replacement_plural"	"all a duppy"
			"replacement_plural"	"duppies"
		}

		"1"
		{
			"word"	"dutch"
			"word_plural"	"dutches"
			"word"	"cooking"
			"word_plural"	"cookings"
			"word"	"pot"
			"word_plural"	"pots"
			"word"	"low"
			"word_plural"	"lows"
			"word"	"round-bottomed"
			"word_plural"	"round-bottomeds"
			"word"	"heavy"
			"word_plural"	"heavies"
			"replacement"	"dutchy"
			"replacement_plural"	"dutchy dem"
			"replacement_plural"	"all a dutchy"
			"replacement_plural"	"dutchies"
		}

		"1"
		{
			"word"	"dirty"
			"word_plural"	"dirties"
			"word"	"filthy"
			"word_plural"	"filthies"
			"word"	"grimy"
			"word_plural"	"grimies"
			"replacement"	"dutty"
			"replacement_plural"	"dutty dem"
			"replacement_plural"	"all a dutty"
			"replacement_plural"	"dutties"
		}

		"1"
		{
			"word"	"forgive"
			"word_plural"	"forgives"
			"word"	"lighten"
			"word_plural"	"lightens"
			"replacement"	"ease-up"
			"replacement_plural"	"ease-up dem"
			"replacement_plural"	"all a ease-up"
			"replacement_plural"	"ease-ups"
		}

		"1"
		{
			"word"	"curry"
			"word_plural"	"curries"
			"word"	"all"
			"word_plural"	"alls"
			"word"	"well"
			"word_plural"	"wells"
			"word"	"taken"
			"word_plural"	"takens"
			"word"	"care"
			"word_plural"	"cares"
			"replacement"	"everyting cook"
			"replacement"	"everyting"
			"replacement"	"cook"
			"replacement_plural"	"everyting cook dem"
			"replacement_plural"	"all a everyting cook"
			"replacement_plural"	"everyting dem"
			"replacement_plural"	"all a everyting"
			"replacement_plural"	"everytings"
			"replacement_plural"	"cook dem"
			"replacement_plural"	"all a cook"
			"replacement_plural"	"cooks"
		}

		"1"
		{
			"word"	"copycat"
			"word_plural"	"copycats"
			"replacement"	"falla fashin"
			"replacement"	"falla"
			"replacement"	"fashin"
			"replacement_plural"	"falla fashin dem"
			"replacement_plural"	"all a falla fashin"
			"replacement_plural"	"falla dem"
			"replacement_plural"	"all a falla"
			"replacement_plural"	"fallas"
			"replacement_plural"	"fashin dem"
			"replacement_plural"	"all a fashin"
			"replacement_plural"	"fashins"
		}

		"1"
		{
			"word"	"fast"
			"word_plural"	"fasts"
			"word"	"impertinent"
			"word_plural"	"impertinents"
			"word"	"meddle"
			"word_plural"	"meddles"
			"word"	"sombody's"
			"word_plural"	"sombody'ses"
			"word"	"business"
			"word_plural"	"businesses"
			"word"	"etc"
			"word_plural"	"etcs"
			"replacement"	"fas'"
			"replacement_plural"	"fas' dem"
			"replacement_plural"	"all a fas'"
			"replacement_plural"	"fas's"
		}

		"1"
		{
			"word"	"eczema-like"
			"word_plural"	"eczema-likes"
			"word"	"scratchy"
			"word_plural"	"scratchies"
			"word"	"sores"
			"word_plural"	"soreses"
			"replacement"	"fassy"
			"replacement_plural"	"fassy dem"
			"replacement_plural"	"all a fassy"
			"replacement_plural"	"fassies"
		}

		"1"
		{
			"word"	"impertinent"
			"word_plural"	"impertinents"
			"word"	"impudent"
			"word_plural"	"impudents"
			"replacement"	"faasti"
			"replacement_plural"	"faasti dem"
			"replacement_plural"	"all a faasti"
			"replacement_plural"	"faastis"
		}

		"1"
		{
			"word"	"favour"
			"word_plural"	"favours"
			"word"	"resemble"
			"word_plural"	"resembles"
			"word"	"look"
			"word_plural"	"looks"
			"replacement"	"fayva"
			"replacement_plural"	"fayva dem"
			"replacement_plural"	"all a fayva"
			"replacement_plural"	"fayvas"
		}

		"1"
		{
			"word"	"infinitive"
			"word_plural"	"infinitives"
			"replacement"	"fe"
			"replacement_plural"	"fe dem"
			"replacement_plural"	"all a fe"
			"replacement_plural"	"fes"
		}

		"1"
		{
			"word"	"don't"
			"word_plural"	"don'ts"
			"word"	"take"
			"word_plural"	"takes"
			"word"	"offense"
			"word_plural"	"offenses"
			"word"	"sorry"
			"word_plural"	"sorries"
			"word"	"worry"
			"word_plural"	"worries"
			"replacement"	"feel no way"
			"replacement_plural"	"feel no way dem"
			"replacement_plural"	"all a feel no way"
		}

		"1"
		{
			"word"	"possessive"
			"word_plural"	"possessives"
			"replacement"	"fi"
			"replacement_plural"	"fi dem"
			"replacement_plural"	"all a fi"
			"replacement_plural"	"fis"
		}

		"1"
		{
			"word"	"impudent"
			"word_plural"	"impudents"
			"word"	"order"
			"word_plural"	"orders"
			"word"	"cheeky"
			"word_plural"	"cheekies"
			"replacement"	"fiesty"
			"replacement_plural"	"fiesty dem"
			"replacement_plural"	"all a fiesty"
			"replacement_plural"	"fiesties"
		}

		"1"
		{
			"word"	"tomorrow"
			"word_plural"	"tomorrows"
			"word"	"fish"
			"word_plural"	"fishes"
			"word"	"gay"
			"word_plural"	"gays"
			"word"	"person"
			"word_plural"	"persons"
			"replacement"	"first light"
			"replacement"	"first"
			"replacement"	"light"
			"replacement_plural"	"first light dem"
			"replacement_plural"	"all a first light"
			"replacement_plural"	"first dem"
			"replacement_plural"	"all a first"
			"replacement_plural"	"firsts"
			"replacement_plural"	"light dem"
			"replacement_plural"	"all a light"
			"replacement_plural"	"lights"
		}

		"1"
		{
			"word"	"fruits"
			"word_plural"	"fruitses"
			"word"	"vegetables"
			"word_plural"	"vegetableses"
			"word"	"ready"
			"word_plural"	"readies"
			"word"	"pick"
			"word_plural"	"picks"
			"word"	"full"
			"word_plural"	"fulls"
			"word"	"grown"
			"word_plural"	"growns"
			"word"	"though"
			"word_plural"	"thoughs"
			"word"	"necessarily"
			"word_plural"	"necessarilies"
			"word"	"fully"
			"word_plural"	"fullies"
			"word"	"ripe"
			"word_plural"	"ripes"
			"replacement"	"fit"
			"replacement_plural"	"fit dem"
			"replacement_plural"	"all a fit"
			"replacement_plural"	"fits"
		}

		"1"
		{
			"word"	"marijuana"
			"word_plural"	"marijuanas"
			"word"	"weed"
			"word_plural"	"weeds"
			"word"	"tobacco"
			"word_plural"	"tobaccos"
			"word"	"leaf"
			"word_plural"	"leafs"
			"word"	"roll"
			"word_plural"	"rolls"
			"replacement"	"fronta"
			"replacement_plural"	"fronta dem"
			"replacement_plural"	"all a fronta"
			"replacement_plural"	"frontas"
		}

		"1"
		{
			"word"	"wrong"
			"word_plural"	"wrongs"
			"word"	"unfair"
			"word_plural"	"unfairs"
			"word"	"fullness"
			"word_plural"	"fullnesses"
			"word"	"completely"
			"word_plural"	"completelies"
			"word"	"absolutely"
			"word_plural"	"absolutelies"
			"word"	"totally"
			"word_plural"	"totallies"
			"replacement"	"fuckery"
			"replacement_plural"	"fuckery dem"
			"replacement_plural"	"all a fuckery"
			"replacement_plural"	"fuckeries"
		}

		"1"
		{
			"word"	"money"
			"word_plural"	"moneys"
			"word"	"cash"
			"word_plural"	"cashes"
			"word"	"dough"
			"word_plural"	"doughs"
			"word"	"coins"
			"word_plural"	"coinses"
			"word"	"coin"
			"word_plural"	"coins"
			"replacement"	"funds"
			"replacement_plural"	"funds dem"
			"replacement_plural"	"all a funds"
			"replacement_plural"	"fundses"
		}

		"1"
		{
			"word"	"adverbial"
			"word_plural"	"adverbials"
			"word"	"phrase"
			"word_plural"	"phrases"
			"replacement"	"gaan a bed"
			"replacement_plural"	"gaan a bed dem"
			"replacement_plural"	"all a gaan a bed"
		}

		"1"
		{
			"word"	"along"
			"word_plural"	"alongs"
			"replacement"	"galang"
			"replacement_plural"	"galang dem"
			"replacement_plural"	"all a galang"
			"replacement_plural"	"galangs"
		}

		"1"
		{
			"word"	"marijuana"
			"word_plural"	"marijuanas"
			"word"	"weed"
			"word_plural"	"weeds"
			"replacement"	"ganja"
			"replacement_plural"	"ganja dem"
			"replacement_plural"	"all a ganja"
			"replacement_plural"	"ganjas"
		}

		"1"
		{
			"word"	"t-shirt"
			"word_plural"	"t-shirts"
			"word"	"any"
			"word_plural"	"anies"
			"word"	"knit"
			"word_plural"	"knits"
			"word"	"shirt"
			"word_plural"	"shirts"
			"word"	"get"
			"word_plural"	"gets"
			"word"	"thwarted"
			"word_plural"	"thwarteds"
			"word"	"encounter"
			"word_plural"	"encounters"
			"word"	"misfortune"
			"word_plural"	"misfortunes"
			"replacement"	"gansey"
			"replacement_plural"	"gansey dem"
			"replacement_plural"	"all a gansey"
			"replacement_plural"	"ganseys"
		}

		"1"
		{
			"word"	"home"
			"word_plural"	"homes"
			"replacement"	"gates"
			"replacement_plural"	"gates dem"
			"replacement_plural"	"all a gates"
			"replacement_plural"	"gateses"
		}

		"1"
		{
			"word"	"operator"
			"word_plural"	"operators"
			"replacement"	"general"
			"replacement_plural"	"general dem"
			"replacement_plural"	"all a general"
			"replacement_plural"	"generals"
		}

		"1"
		{
			"word"	"give"
			"word_plural"	"gives"
			"replacement"	"gi"
			"replacement_plural"	"gi dem"
			"replacement_plural"	"all a gi"
			"replacement_plural"	"gis"
		}

		"1"
		{
			"word"	"spinning"
			"word_plural"	"spinnings"
			"word"	"top"
			"word_plural"	"tops"
			"replacement"	"gig"
			"replacement_plural"	"gig dem"
			"replacement_plural"	"all a gig"
			"replacement_plural"	"gigs"
		}

		"1"
		{
			"word"	"unit"
			"word_plural"	"units"
			"word"	"measure"
			"word_plural"	"measures"
			"word"	"pint"
			"word_plural"	"pints"
			"replacement"	"gill"
			"replacement_plural"	"gill dem"
			"replacement_plural"	"all a gill"
			"replacement_plural"	"gills"
		}

		"1"
		{
			"word"	"woman's"
			"word_plural"	"woman'ses"
			"word"	"genitals"
			"word_plural"	"genitalses"
			"replacement"	"glamity"
			"replacement_plural"	"glamity dem"
			"replacement_plural"	"all a glamity"
			"replacement_plural"	"glamities"
		}

		"1"
		{
			"word"	"female"
			"word_plural"	"females"
			"word"	"impeccable"
			"word_plural"	"impeccables"
			"word"	"reputation"
			"word_plural"	"reputations"
			"replacement"	"goodas"
			"replacement_plural"	"goodas dem"
			"replacement_plural"	"all a goodas"
			"replacement_plural"	"goodases"
		}

		"1"
		{
			"word"	"outstanding"
			"word_plural"	"outstandings"
			"word"	"dragon"
			"word_plural"	"dragons"
			"word"	"person"
			"word_plural"	"persons"
			"word"	"respected"
			"word_plural"	"respecteds"
			"replacement"	"gorgon"
			"replacement_plural"	"gorgon dem"
			"replacement_plural"	"all a gorgon"
			"replacement_plural"	"gorgons"
		}

		"1"
		{
			"word"	"greedy"
			"word_plural"	"greedies"
			"word"	"avaricious"
			"word_plural"	"avariciouses"
			"replacement"	"gravalicious"
			"replacement_plural"	"gravalicious dem"
			"replacement_plural"	"all a gravalicious"
			"replacement_plural"	"gravaliciouses"
		}

		"1"
		{
			"word"	"displays"
			"word_plural"	"displayses"
			"word"	"great"
			"word_plural"	"greats"
			"word"	"prowess"
			"word_plural"	"prowesses"
			"replacement"	"grindsman"
			"replacement_plural"	"grindsman dem"
			"replacement_plural"	"all a grindsman"
			"replacement_plural"	"grindsmans"
		}

		"1"
		{
			"word"	"island-wide"
			"word_plural"	"island-wides"
			"word"	"meeting"
			"word_plural"	"meetings"
			"word"	"celebration"
			"word_plural"	"celebrations"
			"word"	"rastas"
			"word_plural"	"rastases"
			"replacement"	"grounation"
			"replacement_plural"	"grounation dem"
			"replacement_plural"	"all a grounation"
			"replacement_plural"	"grounations"
		}

		"1"
		{
			"word"	"home"
			"word_plural"	"homes"
			"replacement"	"ground"
			"replacement_plural"	"ground dem"
			"replacement_plural"	"all a ground"
			"replacement_plural"	"grounds"
		}

		"1"
		{
			"word"	"ghetto"
			"word_plural"	"ghettos"
			"word"	"slum"
			"word_plural"	"slums"
			"replacement"	"gully"
			"replacement_plural"	"gully dem"
			"replacement_plural"	"all a gully"
			"replacement_plural"	"gullies"
		}

		"1"
		{
			"word"	"hassle"
			"word_plural"	"hassles"
			"word"	"bother"
			"word_plural"	"bothers"
			"word"	"worry"
			"word_plural"	"worries"
			"word"	"trouble"
			"word_plural"	"troubles"
			"replacement"	"hackle"
			"replacement_plural"	"hackle dem"
			"replacement_plural"	"all a hackle"
			"replacement_plural"	"hackles"
		}

		"1"
		{
			"word"	"have"
			"word_plural"	"haves"
			"replacement"	"haffi"
			"replacement_plural"	"haffi dem"
			"replacement_plural"	"all a haffi"
			"replacement_plural"	"haffis"
		}

		"1"
		{
			"word"	"hello"
			"word_plural"	"hellos"
			"word"	"greeting"
			"word_plural"	"greetings"
			"replacement"	"hail"
			"replacement_plural"	"hail dem"
			"replacement_plural"	"all a hail"
			"replacement_plural"	"hails"
		}

		"1"
		{
			"word"	"excellent"
			"word_plural"	"excellents"
			"word"	"proficient"
			"word_plural"	"proficients"
			"word"	"skillful"
			"word_plural"	"skillfuls"
			"word"	"uncompromising"
			"word_plural"	"uncompromisings"
			"word"	"tough"
			"word_plural"	"toughs"
			"word"	"great"
			"word_plural"	"greats"
			"word"	"awesome"
			"word_plural"	"awesomes"
			"replacement"	"hard"
			"replacement_plural"	"hard dem"
			"replacement_plural"	"all a hard"
			"replacement_plural"	"hards"
		}

		"1"
		{
			"word"	"stubborn"
			"word_plural"	"stubborns"
			"word"	"doesn't"
			"word_plural"	"doesn'ts"
			"word"	"listen"
			"word_plural"	"listens"
			"replacement"	"hard ears"
			"replacement"	"hard"
			"replacement"	"ears"
			"replacement_plural"	"hard ears dem"
			"replacement_plural"	"all a hard ears"
			"replacement_plural"	"hard dem"
			"replacement_plural"	"all a hard"
			"replacement_plural"	"hards"
			"replacement_plural"	"ears dem"
			"replacement_plural"	"all a ears"
			"replacement_plural"	"earses"
		}

		"1"
		{
			"word"	"itch"
			"word_plural"	"itches"
			"replacement"	"heetch"
			"replacement_plural"	"heetch dem"
			"replacement_plural"	"all a heetch"
			"replacement_plural"	"heetches"
		}

		"1"
		{
			"word"	"marijuana"
			"word_plural"	"marijuanas"
			"word"	"weed"
			"word_plural"	"weeds"
			"replacement"	"herb"
			"replacement_plural"	"herb dem"
			"replacement_plural"	"all a herb"
			"replacement_plural"	"herbs"
		}

		"1"
		{
			"word"	"ears-hard"
			"word_plural"	"ears-hards"
			"word"	"thick"
			"word_plural"	"thicks"
			"word"	"skulled"
			"word_plural"	"skulleds"
			"word"	"stubborn"
			"word_plural"	"stubborns"
			"word"	"unwilling"
			"word_plural"	"unwillings"
			"word"	"unable"
			"word_plural"	"unables"
			"word"	"hear"
			"word_plural"	"hears"
			"replacement"	"hiez-haad"
			"replacement_plural"	"hiez-haad dem"
			"replacement_plural"	"all a hiez-haad"
			"replacement_plural"	"hiez-haads"
		}

		"1"
		{
			"word"	"primarly"
			"word_plural"	"primarlies"
			"word"	"woman"
			"word_plural"	"womans"
			"word"	"buy"
			"word_plural"	"buys"
			"word"	"sell"
			"word_plural"	"sells"
			"word"	"goods"
			"word_plural"	"goodses"
			"word"	"have"
			"word_plural"	"haves"
			"word"	"imported"
			"word_plural"	"importeds"
			"word"	"country"
			"word_plural"	"countries"
			"replacement"	"higglers"
			"replacement_plural"	"higglers dem"
			"replacement_plural"	"all a higglers"
			"replacement_plural"	"higglerses"
		}

		"1"
		{
			"word"	"upper"
			"word_plural"	"uppers"
			"word"	"class"
			"word_plural"	"classes"
			"word"	"high"
			"word_plural"	"highs"
			"word"	"stoosh"
			"word_plural"	"stooshes"
			"replacement"	"hitey-titey"
			"replacement_plural"	"hitey-titey dem"
			"replacement_plural"	"all a hitey-titey"
			"replacement_plural"	"hitey-titeys"
		}

		"1"
		{
			"word"	"relaxed"
			"word_plural"	"relaxeds"
			"word"	"comfortable"
			"word_plural"	"comfortables"
			"word"	"enjoying"
			"word_plural"	"enjoyings"
			"word"	"home"
			"word_plural"	"homes"
			"word"	"surrounding"
			"word_plural"	"surroundings"
			"replacement"	"homely"
			"replacement_plural"	"homely dem"
			"replacement_plural"	"all a homely"
			"replacement_plural"	"homelies"
		}

		"1"
		{
			"word"	"penis"
			"word_plural"	"penises"
			"replacement"	"hood"
			"replacement_plural"	"hood dem"
			"replacement_plural"	"all a hood"
			"replacement_plural"	"hoods"
		}

		"1"
		{
			"word"	"respected"
			"word_plural"	"respecteds"
			"word"	"acclaimed"
			"word_plural"	"acclaimeds"
			"replacement"	"hortical"
			"replacement_plural"	"hortical dem"
			"replacement_plural"	"all a hortical"
			"replacement_plural"	"horticals"
		}

		"1"
		{
			"word"	"fugitive"
			"word_plural"	"fugitives"
			"replacement"	"hot-stepper"
			"replacement_plural"	"hot-stepper dem"
			"replacement_plural"	"all a hot-stepper"
			"replacement_plural"	"hot-steppers"
		}

		"1"
		{
			"word"	"other"
			"word_plural"	"others"
			"word"	"english"
			"word_plural"	"englishes"
			"word"	"speakers"
			"word_plural"	"speakerses"
			"word"	"hear"
			"word_plural"	"hears"
			"word"	"wonder"
			"word_plural"	"wonders"
			"word"	"told"
			"word_plural"	"tolds"
			"word"	"shut"
			"word_plural"	"shuts"
			"word"	"jamaicans"
			"word_plural"	"jamaicanses"
			"word"	"empathy"
			"word_plural"	"empathies"
			"word"	"sympathy"
			"word_plural"	"sympathies"
			"replacement"	"hush"
			"replacement_plural"	"hush dem"
			"replacement_plural"	"all a hush"
			"replacement_plural"	"hushes"
		}

		"1"
		{
			"word"	"mine"
			"word_plural"	"mines"
			"replacement"	"i-man"
			"replacement_plural"	"i-man dem"
			"replacement_plural"	"all a i-man"
			"replacement_plural"	"i-mans"
		}

		"1"
		{
			"word"	"hello"
			"word_plural"	"hellos"
			"word"	"greeting"
			"word_plural"	"greetings"
			"replacement"	"i-ney"
			"replacement_plural"	"i-ney dem"
			"replacement_plural"	"all a i-ney"
			"replacement_plural"	"i-neys"
		}

		"1"
		{
			"word"	"marijuana"
			"word_plural"	"marijuanas"
			"word"	"weed"
			"word_plural"	"weeds"
			"replacement"	"i-shence"
			"replacement_plural"	"i-shence dem"
			"replacement_plural"	"all a i-shence"
			"replacement_plural"	"i-shences"
		}

		"1"
		{
			"word"	"vital"
			"word_plural"	"vitals"
			"word"	"organic"
			"word_plural"	"organics"
			"word"	"natural"
			"word_plural"	"naturals"
			"word"	"wholesome"
			"word_plural"	"wholesomes"
			"replacement"	"i-tal"
			"replacement_plural"	"i-tal dem"
			"replacement_plural"	"all a i-tal"
			"replacement_plural"	"i-tals"
		}

		"1"
		{
			"word"	"hour"
			"word_plural"	"hours"
			"replacement"	"i-wah"
			"replacement_plural"	"i-wah dem"
			"replacement_plural"	"all a i-wah"
			"replacement_plural"	"i-wahs"
		}

		"1"
		{
			"word"	"replaces"
			"word_plural"	"replaceses"
			"replacement"	"i"
			"replacement_plural"	"i dem"
			"replacement_plural"	"all a i"
			"replacement_plural"	"is"
		}

		"1"
		{
			"word"	"ears-hard"
			"word_plural"	"ears-hards"
			"word"	"thick"
			"word_plural"	"thicks"
			"word"	"skulled"
			"word_plural"	"skulleds"
			"word"	"stubborn"
			"word_plural"	"stubborns"
			"word"	"unwilling"
			"word_plural"	"unwillings"
			"word"	"unable"
			"word_plural"	"unables"
			"word"	"hear"
			"word_plural"	"hears"
			"replacement"	"iez-haad"
			"replacement_plural"	"iez-haad dem"
			"replacement_plural"	"all a iez-haad"
			"replacement_plural"	"iez-haads"
		}

		"1"
		{
			"word"	"short-tempered"
			"word_plural"	"short-tempereds"
			"word"	"easy"
			"word_plural"	"easies"
			"word"	"irate"
			"word_plural"	"irates"
			"replacement"	"ignorant"
			"replacement_plural"	"ignorant dem"
			"replacement_plural"	"all a ignorant"
			"replacement_plural"	"ignorants"
		}

		"1"
		{
			"word"	"tomorrow"
			"word_plural"	"tomorrows"
			"replacement"	"inna di morrows"
			"replacement_plural"	"inna di morrows dem"
			"replacement_plural"	"all a inna di morrows"
		}

		"1"
		{
			"word"	"hello"
			"word_plural"	"hellos"
			"word"	"greeting"
			"word_plural"	"greetings"
			"replacement"	"irie"
			"replacement_plural"	"irie dem"
			"replacement_plural"	"all a irie"
			"replacement_plural"	"iries"
		}

		"1"
		{
			"word"	"singer"
			"word_plural"	"singers"
			"word"	"has"
			"word_plural"	"hases"
			"word"	"found"
			"word_plural"	"founds"
			"word"	"voice"
			"word_plural"	"voices"
			"word"	"ises"
			"word_plural"	"iseses"
			"word"	"izes"
			"word_plural"	"izeses"
			"word"	"isis"
			"word_plural"	"isises"
			"word"	"praises"
			"word_plural"	"praiseses"
			"word"	"almighty"
			"word_plural"	"almighties"
			"word"	"given"
			"word_plural"	"givens"
			"replacement"	"iron ballon"
			"replacement"	"iron"
			"replacement"	"ballon"
			"replacement_plural"	"iron ballon dem"
			"replacement_plural"	"all a iron ballon"
			"replacement_plural"	"iron dem"
			"replacement_plural"	"all a iron"
			"replacement_plural"	"irons"
			"replacement_plural"	"ballon dem"
			"replacement_plural"	"all a ballon"
			"replacement_plural"	"ballons"
		}

		"1"
		{
			"word"	"skisms"
			"word_plural"	"skismses"
			"word"	"negative"
			"word_plural"	"negatives"
			"word"	"denoting"
			"word_plural"	"denotings"
			"word"	"babylon's"
			"word_plural"	"babylon'ses"
			"word"	"classificatory"
			"word_plural"	"classificatories"
			"word"	"systems"
			"word_plural"	"systemses"
			"replacement"	"isms"
			"replacement_plural"	"isms dem"
			"replacement_plural"	"all a isms"
			"replacement_plural"	"ismses"
		}

		"1"
		{
			"word"	"mean"
			"word_plural"	"means"
			"replacement"	"ites"
			"replacement_plural"	"ites dem"
			"replacement_plural"	"all a ites"
			"replacement_plural"	"iteses"
		}

		"1"
		{
			"word"	"certain"
			"word_plural"	"certains"
			"word"	"hour"
			"word_plural"	"hours"
			"word"	"jam-down"
			"word_plural"	"jam-downs"
			"replacement"	"iwa"
			"replacement_plural"	"iwa dem"
			"replacement_plural"	"all a iwa"
			"replacement_plural"	"iwas"
		}

		"1"
		{
			"word"	"homegrown"
			"word_plural"	"homegrowns"
			"word"	"tobacco"
			"word_plural"	"tobaccos"
			"word"	"twisted"
			"word_plural"	"twisteds"
			"replacement"	"jackass rope"
			"replacement"	"jackass"
			"replacement"	"rope"
			"replacement_plural"	"jackass rope dem"
			"replacement_plural"	"all a jackass rope"
			"replacement_plural"	"jackass dem"
			"replacement_plural"	"all a jackass"
			"replacement_plural"	"jackasses"
			"replacement_plural"	"rope dem"
			"replacement_plural"	"all a rope"
			"replacement_plural"	"ropes"
		}

		"1"
		{
			"word"	"lord"
			"word_plural"	"lords"
			"word"	"knows"
			"word_plural"	"knowses"
			"replacement"	"Jah know"
			"replacement"	"Jah"
			"replacement"	"know"
			"replacement_plural"	"Jah know dem"
			"replacement_plural"	"all a Jah know"
			"replacement_plural"	"Jah dem"
			"replacement_plural"	"all a Jah"
			"replacement_plural"	"Jahs"
			"replacement_plural"	"know dem"
			"replacement_plural"	"all a know"
			"replacement_plural"	"knows"
		}

		"1"
		{
			"word"	"god"
			"word_plural"	"gods"
			"replacement"	"Jah"
			"replacement_plural"	"Jah dem"
			"replacement_plural"	"all a Jah"
			"replacement_plural"	"Jahs"
		}

		"1"
		{
			"word"	"jam"
			"word_plural"	"jams"
			"word"	"press"
			"word_plural"	"presses"
			"replacement"	"jamdung"
			"replacement_plural"	"jamdung dem"
			"replacement_plural"	"all a jamdung"
			"replacement_plural"	"jamdungs"
		}

		"1"
		{
			"word"	"having"
			"word_plural"	"havings"
			"word"	"good"
			"word_plural"	"goods"
			"word"	"dancing"
			"word_plural"	"dancings"
			"word"	"calypso"
			"word_plural"	"calypsos"
			"word"	"soca"
			"word_plural"	"socas"
			"replacement"	"jammin"
			"replacement_plural"	"jammin dem"
			"replacement_plural"	"all a jammin"
			"replacement_plural"	"jammins"
		}

		"1"
		{
			"word"	"shrimp"
			"word_plural"	"shrimps"
			"word"	"crayfish"
			"word_plural"	"crayfishes"
			"replacement"	"janga"
			"replacement_plural"	"janga dem"
			"replacement_plural"	"all a janga"
			"replacement_plural"	"jangas"
		}

		"1"
		{
			"word"	"young"
			"word_plural"	"youngs"
			"word"	"coconut"
			"word_plural"	"coconuts"
			"word"	"full"
			"word_plural"	"fulls"
			"replacement"	"jelly"
			"replacement_plural"	"jelly dem"
			"replacement_plural"	"all a jelly"
			"replacement_plural"	"jellies"
		}

		"1"
		{
			"word"	"pierce"
			"word_plural"	"pierces"
			"word"	"stick"
			"word_plural"	"sticks"
			"word"	"thorn"
			"word_plural"	"thorns"
			"word"	"long"
			"word_plural"	"longs"
			"word"	"pointed"
			"word_plural"	"pointeds"
			"replacement"	"jook"
			"replacement_plural"	"jook dem"
			"replacement_plural"	"all a jook"
			"replacement_plural"	"jooks"
		}

		"1"
		{
			"word"	"hangout"
			"word_plural"	"hangouts"
			"word"	"relax"
			"word_plural"	"relaxes"
			"replacement"	"jooks"
			"replacement_plural"	"jooks dem"
			"replacement_plural"	"all a jooks"
			"replacement_plural"	"jookses"
		}

		"1"
		{
			"word"	"adjective"
			"word_plural"	"adjectives"
			"word"	"everyday"
			"word_plural"	"everydays"
			"word"	"ordinary"
			"word_plural"	"ordinaries"
			"word"	"clothes"
			"word_plural"	"clotheses"
			"word"	"shoes"
			"word_plural"	"shoeses"
			"word"	"worn"
			"word_plural"	"worns"
			"word"	"bush"
			"word_plural"	"bushes"
			"replacement"	"judgin'"
			"replacement_plural"	"judgin' dem"
			"replacement_plural"	"all a judgin'"
			"replacement_plural"	"judgin's"
		}

		"1"
		{
			"word"	"verb"
			"word_plural"	"verbs"
			"word"	"rain"
			"word_plural"	"rains"
			"replacement"	"juu"
			"replacement_plural"	"juu dem"
			"replacement_plural"	"all a juu"
			"replacement_plural"	"juus"
		}

		"1"
		{
			"word"	"unreliable"
			"word_plural"	"unreliables"
			"replacement"	"kaba-kaba"
			"replacement_plural"	"kaba-kaba dem"
			"replacement_plural"	"all a kaba-kaba"
			"replacement_plural"	"kaba-kabas"
		}

		"1"
		{
			"word"	"dark"
			"word_plural"	"darks"
			"word"	"green"
			"word_plural"	"greens"
			"word"	"leafy"
			"word_plural"	"leafies"
			"word"	"vegetable"
			"word_plural"	"vegetables"
			"word"	"very"
			"word_plural"	"veries"
			"word"	"nutritious"
			"word_plural"	"nutritiouses"
			"replacement"	"kallaloo"
			"replacement_plural"	"kallaloo dem"
			"replacement_plural"	"all a kallaloo"
			"replacement_plural"	"kallaloos"
		}

		"1"
		{
			"word"	"dispute"
			"word_plural"	"disputes"
			"replacement"	"kass kass"
			"replacement"	"kass"
			"replacement_plural"	"kass kass dem"
			"replacement_plural"	"all a kass kass"
			"replacement_plural"	"kass dem"
			"replacement_plural"	"all a kass"
			"replacement_plural"	"kasses"
		}

		"1"
		{
			"word"	"roll"
			"word_plural"	"rolls"
			"word"	"cloth"
			"word_plural"	"cloths"
			"word"	"vegetation"
			"word_plural"	"vegetations"
			"word"	"placed"
			"word_plural"	"placeds"
			"word"	"top"
			"word_plural"	"tops"
			"word"	"cushion"
			"word_plural"	"cushions"
			"word"	"skull"
			"word_plural"	"skulls"
			"replacement"	"kata"
			"replacement_plural"	"kata dem"
			"replacement_plural"	"all a kata"
			"replacement_plural"	"katas"
		}

		"1"
		{
			"word"	"marijuana"
			"word_plural"	"marijuanas"
			"word"	"weed"
			"word_plural"	"weeds"
			"replacement"	"kaya"
			"replacement_plural"	"kaya dem"
			"replacement_plural"	"all a kaya"
			"replacement_plural"	"kayas"
		}

		"1"
		{
			"word"	"grapple"
			"word_plural"	"grapples"
			"word"	"get"
			"word_plural"	"gets"
			"word"	"fight"
			"word_plural"	"fights"
			"replacement"	"ketch up"
			"replacement"	"ketch"
			"replacement"	"up"
			"replacement_plural"	"ketch up dem"
			"replacement_plural"	"all a ketch up"
			"replacement_plural"	"ketch dem"
			"replacement_plural"	"all a ketch"
			"replacement_plural"	"ketches"
			"replacement_plural"	"up dem"
			"replacement_plural"	"all a up"
			"replacement_plural"	"ups"
		}

		"1"
		{
			"word"	"sexual"
			"word_plural"	"sexuals"
			"word"	"throw"
			"word_plural"	"throws"
			"word"	"woman"
			"word_plural"	"womans"
			"word"	"catch"
			"word_plural"	"catches"
			"word"	"mean"
			"word_plural"	"means"
			"word"	"game"
			"word_plural"	"games"
			"word"	"life's"
			"word_plural"	"life'ses"
			"word"	"through"
			"word_plural"	"throughs"
			"word"	"meet"
			"word_plural"	"meets"
			"word"	"tomorrowand"
			"word_plural"	"tomorrowands"
			"replacement"	"ketchy-chuby"
			"replacement_plural"	"ketchy-chuby dem"
			"replacement_plural"	"all a ketchy-chuby"
			"replacement_plural"	"ketchy-chubies"
		}

		"1"
		{
			"word"	"little"
			"word_plural"	"littles"
			"word"	"tiny"
			"word_plural"	"tinies"
			"word"	"piece"
			"word_plural"	"pieces"
			"replacement"	"kemps"
			"replacement_plural"	"kemps dem"
			"replacement_plural"	"all a kemps"
			"replacement_plural"	"kempses"
		}

		"1"
		{
			"word"	"laugh"
			"word_plural"	"laughs"
			"word"	"someone"
			"word_plural"	"someones"
			"word"	"give"
			"word_plural"	"gives"
			"word"	"plastic"
			"word_plural"	"plastics"
			"word"	"smile"
			"word_plural"	"smiles"
			"word"	"sometimes"
			"word_plural"	"sometimeses"
			"word"	"derogatorily"
			"word_plural"	"derogatorilies"
			"replacement"	"kin teet"
			"replacement"	"kin"
			"replacement"	"teet"
			"replacement_plural"	"kin teet dem"
			"replacement_plural"	"all a kin teet"
			"replacement_plural"	"kin dem"
			"replacement_plural"	"all a kin"
			"replacement_plural"	"kins"
			"replacement_plural"	"teet dem"
			"replacement_plural"	"all a teet"
			"replacement_plural"	"teets"
		}

		"1"
		{
			"word"	"exclamation"
			"word_plural"	"exclamations"
			"word"	"surprise"
			"word_plural"	"surprises"
			"replacement"	"kiss me neck!"
			"replacement_plural"	"kiss me neck! dem"
			"replacement_plural"	"all a kiss me neck!"
		}

		"1"
		{
			"word"	"one's"
			"word_plural"	"one'ses"
			"word"	"suck"
			"word_plural"	"sucks"
			"word"	"make"
			"word_plural"	"makes"
			"word"	"very"
			"word_plural"	"veries"
			"word"	"hissing"
			"word_plural"	"hissings"
			"word"	"noise"
			"word_plural"	"noises"
			"word"	"disappoval"
			"word_plural"	"disappovals"
			"word"	"dislike"
			"word_plural"	"dislikes"
			"word"	"vexation"
			"word_plural"	"vexations"
			"word"	"disappointment"
			"word_plural"	"disappointments"
			"replacement"	"kiss teet"
			"replacement"	"kiss"
			"replacement"	"teet"
			"replacement_plural"	"kiss teet dem"
			"replacement_plural"	"all a kiss teet"
			"replacement_plural"	"kiss dem"
			"replacement_plural"	"all a kiss"
			"replacement_plural"	"kisses"
			"replacement_plural"	"teet dem"
			"replacement_plural"	"all a teet"
			"replacement_plural"	"teets"
		}

		"1"
		{
			"word"	"bowl"
			"word_plural"	"bowls"
			"word"	"chillum"
			"word_plural"	"chillums"
			"word"	"pipe"
			"word_plural"	"pipes"
			"replacement"	"kouchie"
			"replacement_plural"	"kouchie dem"
			"replacement_plural"	"all a kouchie"
			"replacement_plural"	"kouchies"
		}

		"1"
		{
			"word"	"old-fashioned"
			"word_plural"	"old-fashioneds"
			"word"	"meat"
			"word_plural"	"meats"
			"word"	"rack"
			"word_plural"	"racks"
			"word"	"hung"
			"word_plural"	"hungs"
			"word"	"high"
			"word_plural"	"highs"
			"word"	"fire"
			"word_plural"	"fires"
			"word"	"catch"
			"word_plural"	"catches"
			"word"	"smoke"
			"word_plural"	"smokes"
			"replacement"	"kreng-kreng"
			"replacement_plural"	"kreng-kreng dem"
			"replacement_plural"	"all a kreng-kreng"
			"replacement_plural"	"kreng-krengs"
		}

		"1"
		{
			"word"	"chat"
			"word_plural"	"chats"
			"word"	"gab"
			"word_plural"	"gabs"
			"replacement"	"laba-laba"
			"replacement_plural"	"laba-laba dem"
			"replacement_plural"	"all a laba-laba"
			"replacement_plural"	"laba-labas"
		}

		"1"
		{
			"word"	"gossip"
			"word_plural"	"gossips"
			"word"	"chit-chat"
			"word_plural"	"chit-chats"
			"word"	"rumor"
			"word_plural"	"rumors"
			"word"	"rumour"
			"word_plural"	"rumours"
			"word"	"talk"
			"word_plural"	"talks"
			"replacement"	"labrish"
			"replacement_plural"	"labrish dem"
			"replacement_plural"	"all a labrish"
			"replacement_plural"	"labrishes"
		}

		"1"
		{
			"word"	"dumb"
			"word_plural"	"dumbs"
			"word"	"acts"
			"word_plural"	"actses"
			"word"	"have"
			"word_plural"	"haves"
			"word"	"sense"
			"word_plural"	"senses"
			"replacement"	"lagga head"
			"replacement"	"lagga"
			"replacement"	"head"
			"replacement_plural"	"lagga head dem"
			"replacement_plural"	"all a lagga head"
			"replacement_plural"	"lagga dem"
			"replacement_plural"	"all a lagga"
			"replacement_plural"	"laggas"
			"replacement_plural"	"head dem"
			"replacement_plural"	"all a head"
			"replacement_plural"	"heads"
		}

		"1"
		{
			"word"	"marijuana"
			"word_plural"	"marijuanas"
			"word"	"weed"
			"word_plural"	"weeds"
			"word"	"form"
			"word_plural"	"forms"
			"word"	"high-quality"
			"word_plural"	"high-qualities"
			"replacement"	"lambsbread"
			"replacement_plural"	"lambsbread dem"
			"replacement_plural"	"all a lambsbread"
			"replacement_plural"	"lambsbreads"
		}

		"1"
		{
			"word"	"respected"
			"word_plural"	"respecteds"
			"replacement"	"large"
			"replacement_plural"	"large dem"
			"replacement_plural"	"all a large"
			"replacement_plural"	"larges"
		}

		"1"
		{
			"word"	"pay"
			"word_plural"	"pays"
			"replacement"	"let off"
			"replacement"	"let"
			"replacement"	"off"
			"replacement_plural"	"let off dem"
			"replacement_plural"	"all a let off"
			"replacement_plural"	"let dem"
			"replacement_plural"	"all a let"
			"replacement_plural"	"lets"
			"replacement_plural"	"off dem"
			"replacement_plural"	"all a off"
			"replacement_plural"	"offs"
		}

		"1"
		{
			"word"	"wild"
			"word_plural"	"wilds"
			"word"	"disorderly"
			"word_plural"	"disorderlies"
			"word"	"let-go"
			"word_plural"	"let-gos"
			"replacement"	"leggo beas'"
			"replacement"	"leggo"
			"replacement"	"beas'"
			"replacement_plural"	"leggo beas' dem"
			"replacement_plural"	"all a leggo beas'"
			"replacement_plural"	"leggo dem"
			"replacement_plural"	"all a leggo"
			"replacement_plural"	"leggos"
			"replacement_plural"	"beas' dem"
			"replacement_plural"	"all a beas'"
			"replacement_plural"	"beas's"
		}

		"1"
		{
			"word"	"hit"
			"word_plural"	"hits"
			"replacement"	"lick"
			"replacement_plural"	"lick dem"
			"replacement_plural"	"all a lick"
			"replacement_plural"	"licks"
		}

		"1"
		{
			"word"	"fawning"
			"word_plural"	"fawnings"
			"word"	"flattering"
			"word_plural"	"flatterings"
			"word"	"obsequious"
			"word_plural"	"obsequiouses"
			"replacement"	"licky-licky"
			"replacement_plural"	"licky-licky dem"
			"replacement_plural"	"all a licky-licky"
			"replacement_plural"	"licky-lickies"
		}

		"1"
		{
			"word"	"little"
			"word_plural"	"littles"
			"replacement"	"likkle"
			"replacement_plural"	"likkle dem"
			"replacement_plural"	"all a likkle"
			"replacement_plural"	"likkles"
		}

		"1"
		{
			"word"	"little"
			"word_plural"	"littles"
			"word"	"tiny"
			"word_plural"	"tinies"
			"replacement"	"lilly bit"
			"replacement"	"lilly"
			"replacement"	"bit"
			"replacement_plural"	"lilly bit dem"
			"replacement_plural"	"all a lilly bit"
			"replacement_plural"	"lilly dem"
			"replacement_plural"	"all a lilly"
			"replacement_plural"	"lillies"
			"replacement_plural"	"bit dem"
			"replacement_plural"	"all a bit"
			"replacement_plural"	"bits"
		}

		"1"
		{
			"word"	"righteous"
			"word_plural"	"righteouses"
			"word"	"great"
			"word_plural"	"greats"
			"word"	"soul"
			"word_plural"	"souls"
			"replacement"	"lion"
			"replacement_plural"	"lion dem"
			"replacement_plural"	"all a lion"
			"replacement_plural"	"lions"
		}

		"1"
		{
			"word"	"later"
			"word_plural"	"laters"
			"word"	"likky-likky"
			"word_plural"	"likky-likkies"
			"word"	"title"
			"word_plural"	"titles"
			"word"	"given"
			"word_plural"	"givens"
			"word"	"eat"
			"word_plural"	"eats"
			"word"	"any"
			"word_plural"	"anies"
			"word"	"food"
			"word_plural"	"foods"
			"word"	"encounter"
			"word_plural"	"encounters"
			"word"	"discretion"
			"word_plural"	"discretions"
			"replacement"	"likkle more"
			"replacement"	"likkle"
			"replacement"	"more"
			"replacement_plural"	"likkle more dem"
			"replacement_plural"	"all a likkle more"
			"replacement_plural"	"likkle dem"
			"replacement_plural"	"all a likkle"
			"replacement_plural"	"likkles"
			"replacement_plural"	"more dem"
			"replacement_plural"	"all a more"
			"replacement_plural"	"mores"
		}

		"1"
		{
			"word"	"gay"
			"word_plural"	"gays"
			"word"	"person"
			"word_plural"	"persons"
			"word"	"effeminate"
			"word_plural"	"effeminates"
			"word"	"weakling"
			"word_plural"	"weaklings"
			"replacement"	"maama man"
			"replacement"	"maama"
			"replacement"	"man"
			"replacement_plural"	"maama man dem"
			"replacement_plural"	"all a maama man"
			"replacement_plural"	"maama dem"
			"replacement_plural"	"all a maama"
			"replacement_plural"	"maamas"
			"replacement_plural"	"man dem"
			"replacement_plural"	"all a man"
			"replacement_plural"	"mans"
		}

		"1"
		{
			"word"	"thorn"
			"word_plural"	"thorns"
			"word"	"prickle"
			"word_plural"	"prickles"
			"replacement"	"macca"
			"replacement_plural"	"macca dem"
			"replacement_plural"	"all a macca"
			"replacement_plural"	"maccas"
		}

		"1"
		{
			"word"	"boney"
			"word_plural"	"boneys"
			"word"	"fish"
			"word_plural"	"fishes"
			"word"	"make"
			"word_plural"	"makes"
			"word"	"soup"
			"word_plural"	"soups"
			"replacement"	"macca back"
			"replacement"	"macca"
			"replacement"	"back"
			"replacement_plural"	"macca back dem"
			"replacement_plural"	"all a macca back"
			"replacement_plural"	"macca dem"
			"replacement_plural"	"all a macca"
			"replacement_plural"	"maccas"
			"replacement_plural"	"back dem"
			"replacement_plural"	"all a back"
			"replacement_plural"	"backs"
		}

		"1"
		{
			"word"	"mother"
			"word_plural"	"mothers"
			"replacement"	"madda"
			"replacement_plural"	"madda dem"
			"replacement_plural"	"all a madda"
			"replacement_plural"	"maddas"
		}

		"1"
		{
			"word"	"big-time"
			"word_plural"	"big-times"
			"word"	"criminals"
			"word_plural"	"criminalses"
			"replacement"	"mafia"
			"replacement_plural"	"mafia dem"
			"replacement_plural"	"all a mafia"
			"replacement_plural"	"mafias"
		}

		"1"
		{
			"word"	"mongrel"
			"word_plural"	"mongrels"
			"replacement"	"maga dog"
			"replacement"	"maga"
			"replacement"	"dog"
			"replacement_plural"	"maga dog dem"
			"replacement_plural"	"all a maga dog"
			"replacement_plural"	"maga dem"
			"replacement_plural"	"all a maga"
			"replacement_plural"	"magas"
			"replacement_plural"	"dog dem"
			"replacement_plural"	"all a dog"
			"replacement_plural"	"dogs"
		}

		"1"
		{
			"word"	"thin"
			"word_plural"	"thins"
			"replacement"	"maga"
			"replacement_plural"	"maga dem"
			"replacement_plural"	"all a maga"
			"replacement_plural"	"magas"
		}

		"1"
		{
			"word"	"fat"
			"word_plural"	"fats"
			"word"	"overweight"
			"word_plural"	"overweights"
			"replacement"	"mampi"
			"replacement_plural"	"mampi dem"
			"replacement_plural"	"all a mampi"
			"replacement_plural"	"mampis"
		}

		"1"
		{
			"word"	"chains"
			"word_plural"	"chainses"
			"replacement"	"manacles"
			"replacement_plural"	"manacles dem"
			"replacement_plural"	"all a manacles"
			"replacement_plural"	"manacleses"
		}

		"1"
		{
			"word"	"heavy"
			"word_plural"	"heavies"
			"word"	"discipline"
			"word_plural"	"disciplines"
			"word"	"punishment"
			"word_plural"	"punishments"
			"replacement"	"manners"
			"replacement_plural"	"manners dem"
			"replacement_plural"	"all a manners"
			"replacement_plural"	"mannerses"
		}

		"1"
		{
			"word"	"man's"
			"word_plural"	"man'ses"
			"word"	"undershirt"
			"word_plural"	"undershirts"
			"word"	"guernsey"
			"word_plural"	"guernseys"
			"replacement"	"marina"
			"replacement_plural"	"marina dem"
			"replacement_plural"	"all a marina"
			"replacement_plural"	"marinas"
		}

		"1"
		{
			"word"	"denoting"
			"word_plural"	"denotings"
			"word"	"inferior"
			"word_plural"	"inferiors"
			"word"	"status"
			"word_plural"	"statuses"
			"replacement"	"mascot"
			"replacement_plural"	"mascot dem"
			"replacement_plural"	"all a mascot"
			"replacement_plural"	"mascots"
		}

		"1"
		{
			"word"	"huge"
			"word_plural"	"huges"
			"word"	"success"
			"word_plural"	"successes"
			"replacement"	"mash it up"
			"replacement_plural"	"mash it up dem"
			"replacement_plural"	"all a mash it up"
		}

		"1"
		{
			"word"	"destroy"
			"word_plural"	"destroys"
			"replacement"	"mash"
			"replacement_plural"	"mash dem"
			"replacement_plural"	"all a mash"
			"replacement_plural"	"mashes"
		}

		"1"
		{
			"word"	"respected"
			"word_plural"	"respecteds"
			"word"	"add"
			"word_plural"	"adds"
			"word"	"emphasis"
			"word_plural"	"emphasises"
			"replacement"	"massive"
			"replacement_plural"	"massive dem"
			"replacement_plural"	"all a massive"
			"replacement_plural"	"massives"
		}

		"1"
		{
			"word"	"mistress"
			"word_plural"	"mistresses"
			"replacement"	"matey"
			"replacement_plural"	"matey dem"
			"replacement_plural"	"all a matey"
			"replacement_plural"	"mateys"
		}

		"1"
		{
			"word"	"resist"
			"word_plural"	"resists"
			"replacement"	"mek we"
			"replacement"	"mek"
			"replacement"	"we"
			"replacement_plural"	"mek we dem"
			"replacement_plural"	"all a mek we"
			"replacement_plural"	"mek dem"
			"replacement_plural"	"all a mek"
			"replacement_plural"	"meks"
			"replacement_plural"	"we dem"
			"replacement_plural"	"all a we"
			"replacement_plural"	"wes"
		}

		"1"
		{
			"word"	"amongst"
			"word_plural"	"amongsts"
			"replacement"	"monks"
			"replacement_plural"	"monks dem"
			"replacement_plural"	"all a monks"
			"replacement_plural"	"monkses"
		}

		"1"
		{
			"word"	"later"
			"word_plural"	"laters"
			"replacement"	"more time"
			"replacement"	"more"
			"replacement"	"time"
			"replacement_plural"	"more time dem"
			"replacement_plural"	"all a more time"
			"replacement_plural"	"more dem"
			"replacement_plural"	"all a more"
			"replacement_plural"	"mores"
			"replacement_plural"	"time dem"
			"replacement_plural"	"all a time"
			"replacement_plural"	"times"
		}

		"1"
		{
			"word"	"dumb"
			"word_plural"	"dumbs"
			"word"	"foolish"
			"word_plural"	"foolishes"
			"word"	"person"
			"word_plural"	"persons"
			"replacement"	"mumu"
			"replacement_plural"	"mumu dem"
			"replacement_plural"	"all a mumu"
			"replacement_plural"	"mumus"
		}

		"1"
		{
			"word"	"rat"
			"word_plural"	"rats"
			"replacement"	"mus mus"
			"replacement"	"mus"
			"replacement_plural"	"mus mus dem"
			"replacement_plural"	"all a mus mus"
			"replacement_plural"	"mus dem"
			"replacement_plural"	"all a mus"
			"replacement_plural"	"muses"
		}

		"1"
		{
			"word"	"mother"
			"word_plural"	"mothers"
			"word"	"father"
			"word_plural"	"fathers"
			"word"	"child"
			"word_plural"	"childs"
			"replacement"	"my baby"
			"replacement"	"my"
			"replacement"	"baby"
			"replacement_plural"	"my baby dem"
			"replacement_plural"	"all a my baby"
			"replacement_plural"	"my dem"
			"replacement_plural"	"all a my"
			"replacement_plural"	"mies"
			"replacement_plural"	"baby dem"
			"replacement_plural"	"all a baby"
			"replacement_plural"	"babies"
		}

		"1"
		{
			"word"	"midwife"
			"word_plural"	"midwifes"
			"replacement"	"nana"
			"replacement_plural"	"nana dem"
			"replacement_plural"	"all a nana"
			"replacement_plural"	"nanas"
		}

		"1"
		{
			"word"	"sweet"
			"word_plural"	"sweets"
			"word"	"run"
			"word_plural"	"runs"
			"word"	"him"
			"word_plural"	"hims"
			"word"	"cautionary"
			"word_plural"	"cautionaries"
			"word"	"proverb"
			"word_plural"	"proverbs"
			"word"	"which"
			"word_plural"	"whiches"
			"word"	"translated"
			"word_plural"	"translateds"
			"word"	"tastes"
			"word_plural"	"tasteses"
			"word"	"good"
			"word_plural"	"goods"
			"word"	"ruin"
			"word_plural"	"ruins"
			"replacement"	"nanny goat"
			"replacement"	"nanny"
			"replacement"	"goat"
			"replacement_plural"	"nanny goat dem"
			"replacement_plural"	"all a nanny goat"
			"replacement_plural"	"nanny dem"
			"replacement_plural"	"all a nanny"
			"replacement_plural"	"nannies"
			"replacement_plural"	"goat dem"
			"replacement_plural"	"all a goat"
			"replacement_plural"	"goats"
		}

		"1"
		{
			"word"	"female"
			"word_plural"	"females"
			"word"	"genatalia"
			"word_plural"	"genatalias"
			"word"	"natty"
			"word_plural"	"natties"
			"word"	"congo"
			"word_plural"	"congos"
			"replacement"	"nash"
			"replacement_plural"	"nash dem"
			"replacement_plural"	"all a nash"
			"replacement_plural"	"nashes"
		}

		"1"
		{
			"word"	"ancient"
			"word_plural"	"ancients"
			"word"	"hebrew"
			"word_plural"	"hebrews"
			"word"	"separate"
			"word_plural"	"separates"
			"word"	"consecrated"
			"word_plural"	"consecrateds"
			"word"	"set"
			"word_plural"	"sets"
			"word"	"apart"
			"word_plural"	"aparts"
			"word"	"choice"
			"word_plural"	"choices"
			"word"	"devotion"
			"word_plural"	"devotions"
			"replacement"	"nazarite"
			"replacement_plural"	"nazarite dem"
			"replacement_plural"	"all a nazarite"
			"replacement_plural"	"nazarites"
		}

		"1"
		{
			"word"	"promote"
			"word_plural"	"promotes"
			"word"	"foster"
			"word_plural"	"fosters"
			"word"	"positive"
			"word_plural"	"positives"
			"word"	"feeling"
			"word_plural"	"feelings"
			"replacement"	"nice up"
			"replacement"	"nice"
			"replacement"	"up"
			"replacement_plural"	"nice up dem"
			"replacement_plural"	"all a nice up"
			"replacement_plural"	"nice dem"
			"replacement_plural"	"all a nice"
			"replacement_plural"	"nices"
			"replacement_plural"	"up dem"
			"replacement_plural"	"all a up"
			"replacement_plural"	"ups"
		}

		"1"
		{
			"word"	"all"
			"word_plural"	"alls"
			"replacement"	"niyabinghi"
			"replacement_plural"	"niyabinghi dem"
			"replacement_plural"	"all a niyabinghi"
			"replacement_plural"	"niyabinghis"
		}

		"1"
		{
			"word"	"rastas"
			"word_plural"	"rastases"
			"word"	"warriors"
			"word_plural"	"warriorses"
			"word"	"east"
			"word_plural"	"easts"
			"word"	"africa"
			"word_plural"	"africas"
			"replacement"	"niyamen"
			"replacement_plural"	"niyamen dem"
			"replacement_plural"	"all a niyamen"
			"replacement_plural"	"niyamens"
		}

		"1"
		{
			"word"	"matter"
			"word_plural"	"matters"
			"replacement"	"no cya"
			"replacement"	"no"
			"replacement"	"cya"
			"replacement_plural"	"no cya dem"
			"replacement_plural"	"all a no cya"
			"replacement_plural"	"no dem"
			"replacement_plural"	"all a no"
			"replacement_plural"	"nos"
			"replacement_plural"	"cya dem"
			"replacement_plural"	"all a cya"
			"replacement_plural"	"cyas"
		}

		"1"
		{
			"word"	"top"
			"word_plural"	"tops"
			"word"	"badman"
			"word_plural"	"badmans"
			"replacement"	"notch"
			"replacement_plural"	"notch dem"
			"replacement_plural"	"all a notch"
			"replacement_plural"	"notches"
		}

		"1"
		{
			"word"	"interrogative"
			"word_plural"	"interrogatives"
			"word"	"end"
			"word_plural"	"ends"
			"word"	"sentence"
			"word_plural"	"sentences"
			"replacement"	"nuh"
			"replacement_plural"	"nuh dem"
			"replacement_plural"	"all a nuh"
			"replacement_plural"	"nuhs"
		}

		"1"
		{
			"word"	"deal"
			"word_plural"	"deals"
			"replacement"	"nuh nuttin"
			"replacement"	"nuh"
			"replacement"	"nuttin"
			"replacement_plural"	"nuh nuttin dem"
			"replacement_plural"	"all a nuh nuttin"
			"replacement_plural"	"nuh dem"
			"replacement_plural"	"all a nuh"
			"replacement_plural"	"nuhs"
			"replacement_plural"	"nuttin dem"
			"replacement_plural"	"all a nuttin"
			"replacement_plural"	"nuttins"
		}

		"1"
		{
			"word"	"isn't"
			"word_plural"	"isn'ts"
			"replacement"	"nuh true?"
			"replacement_plural"	"nuh true? dem"
			"replacement_plural"	"all a nuh true?"
		}

		"1"
		{
			"word"	"eat"
			"word_plural"	"eats"
			"replacement"	"nyam"
			"replacement_plural"	"nyam dem"
			"replacement_plural"	"all a nyam"
			"replacement_plural"	"nyams"
		}

		"1"
		{
			"word"	"nagging"
			"word_plural"	"naggings"
			"word"	"whining"
			"word_plural"	"whinings"
			"replacement"	"nying'i-nying'i"
			"replacement_plural"	"nying'i-nying'i dem"
			"replacement_plural"	"all a nying'i-nying'i"
			"replacement_plural"	"nying'i-nying'is"
		}

		"1"
		{
			"word"	"boiled"
			"word_plural"	"boileds"
			"word"	"maize"
			"word_plural"	"maizes"
			"word"	"bread"
			"word_plural"	"breads"
			"replacement"	"o-dokono"
			"replacement_plural"	"o-dokono dem"
			"replacement_plural"	"all a o-dokono"
			"replacement_plural"	"o-dokonos"
		}

		"1"
		{
			"word"	"traditional"
			"word_plural"	"traditionals"
			"word"	"african"
			"word_plural"	"africans"
			"word"	"relating"
			"word_plural"	"relatings"
			"word"	"matters"
			"word_plural"	"matterses"
			"word"	"spirit"
			"word_plural"	"spirits"
			"word"	"spirits"
			"word_plural"	"spiritses"
			"word"	"spells"
			"word_plural"	"spellses"
			"word"	"divinations"
			"word_plural"	"divinationses"
			"word"	"omens"
			"word_plural"	"omenses"
			"word"	"extra-sensory"
			"word_plural"	"extra-sensories"
			"replacement"	"obeah"
			"replacement_plural"	"obeah dem"
			"replacement_plural"	"all a obeah"
			"replacement_plural"	"obeahs"
		}

		"1"
		{
			"word"	"vergeof"
			"word_plural"	"vergeofs"
			"replacement"	"oht fi"
			"replacement"	"oht"
			"replacement"	"fi"
			"replacement_plural"	"oht fi dem"
			"replacement_plural"	"all a oht fi"
			"replacement_plural"	"oht dem"
			"replacement_plural"	"all a oht"
			"replacement_plural"	"ohts"
			"replacement_plural"	"fi dem"
			"replacement_plural"	"all a fi"
			"replacement_plural"	"fis"
		}

		"1"
		{
			"word"	"type"
			"word_plural"	"types"
			"word"	"rhythm"
			"word_plural"	"rhythms"
			"word"	"pattern"
			"word_plural"	"patterns"
			"word"	"countless"
			"word_plural"	"countlesses"
			"word"	"reggae"
			"word_plural"	"reggaes"
			"word"	"records"
			"word_plural"	"recordses"
			"replacement"	"one drop"
			"replacement"	"one"
			"replacement"	"drop"
			"replacement_plural"	"one drop dem"
			"replacement_plural"	"all a one drop"
			"replacement_plural"	"one dem"
			"replacement_plural"	"all a one"
			"replacement_plural"	"ones"
			"replacement_plural"	"drop dem"
			"replacement_plural"	"all a drop"
			"replacement_plural"	"drops"
		}

		"1"
		{
			"word"	"goodbye"
			"word_plural"	"goodbyes"
			"word"	"bye"
			"word_plural"	"byes"
			"word"	"parting"
			"word_plural"	"partings"
			"word"	"phrase"
			"word_plural"	"phrases"
			"word"	"unity"
			"word_plural"	"unities"
			"replacement"	"one love"
			"replacement"	"one"
			"replacement"	"love"
			"replacement_plural"	"one love dem"
			"replacement_plural"	"all a one love"
			"replacement_plural"	"one dem"
			"replacement_plural"	"all a one"
			"replacement_plural"	"ones"
			"replacement_plural"	"love dem"
			"replacement_plural"	"all a love"
			"replacement_plural"	"loves"
		}

		"1"
		{
			"word"	"adjective"
			"word_plural"	"adjectives"
			"word"	"thus"
			"word_plural"	"thuses"
			"word"	"any"
			"word_plural"	"anies"
			"word"	"small"
			"word_plural"	"smalls"
			"word"	"amount"
			"word_plural"	"amounts"
			"replacement"	"one-one"
			"replacement_plural"	"one-one dem"
			"replacement_plural"	"all a one-one"
			"replacement_plural"	"one-ones"
		}

		"1"
		{
			"word"	"only"
			"word_plural"	"onlies"
			"replacement"	"ongle"
			"replacement_plural"	"ongle dem"
			"replacement_plural"	"all a ongle"
			"replacement_plural"	"ongles"
		}

		"1"
		{
			"word"	"calabash"
			"word_plural"	"calabashes"
			"word"	"gourd"
			"word_plural"	"gourds"
			"replacement"	"paki"
			"replacement_plural"	"paki dem"
			"replacement_plural"	"all a paki"
			"replacement_plural"	"pakis"
		}

		"1"
		{
			"word"	"pawpaw"
			"word_plural"	"pawpaws"
			"word"	"papaya"
			"word_plural"	"papayas"
			"word"	"melon"
			"word_plural"	"melons"
			"replacement"	"papaa"
			"replacement_plural"	"papaa dem"
			"replacement_plural"	"all a papaa"
			"replacement_plural"	"papaas"
		}

		"1"
		{
			"word"	"gossip"
			"word_plural"	"gossips"
			"word"	"rumor"
			"word_plural"	"rumors"
			"word"	"rumour"
			"word_plural"	"rumours"
			"word"	"talk"
			"word_plural"	"talks"
			"replacement"	"passa passa"
			"replacement"	"passa"
			"replacement_plural"	"passa passa dem"
			"replacement_plural"	"all a passa passa"
			"replacement_plural"	"passa dem"
			"replacement_plural"	"all a passa"
			"replacement_plural"	"passas"
		}

		"1"
		{
			"word"	"pattern"
			"word_plural"	"patterns"
			"word"	"style"
			"word_plural"	"styles"
			"word"	"fashion"
			"word_plural"	"fashions"
			"replacement"	"pattan"
			"replacement_plural"	"pattan dem"
			"replacement_plural"	"all a pattan"
			"replacement_plural"	"pattans"
		}

		"1"
		{
			"word"	"owl"
			"word_plural"	"owls"
			"replacement"	"patu"
			"replacement_plural"	"patu dem"
			"replacement_plural"	"all a patu"
			"replacement_plural"	"patus"
		}

		"1"
		{
			"word"	"heathen"
			"word_plural"	"heathens"
			"word"	"want"
			"word_plural"	"wants"
			"word"	"all"
			"word_plural"	"alls"
			"replacement"	"payaka"
			"replacement_plural"	"payaka dem"
			"replacement_plural"	"all a payaka"
			"replacement_plural"	"payakas"
		}

		"1"
		{
			"word"	"tricky"
			"word_plural"	"trickies"
			"word"	"dishonest"
			"word_plural"	"dishonests"
			"replacement"	"pyaka"
			"replacement_plural"	"pyaka dem"
			"replacement_plural"	"all a pyaka"
			"replacement_plural"	"pyakas"
		}

		"1"
		{
			"word"	"bald-headed"
			"word_plural"	"bald-headeds"
			"word"	"usually"
			"word_plural"	"usuallies"
			"word"	"certain"
			"word_plural"	"certains"
			"word"	"chickens"
			"word_plural"	"chickenses"
			"word"	"vultures"
			"word_plural"	"vultureses"
			"replacement"	"peel-head"
			"replacement_plural"	"peel-head dem"
			"replacement_plural"	"all a peel-head"
			"replacement_plural"	"peel-heads"
		}

		"1"
		{
			"word"	"kind"
			"word_plural"	"kinds"
			"word"	"fire"
			"word_plural"	"fires"
			"word"	"fly"
			"word_plural"	"flies"
			"word"	"actually"
			"word_plural"	"actuallies"
			"word"	"type"
			"word_plural"	"types"
			"word"	"flying"
			"word_plural"	"flyings"
			"word"	"beetle"
			"word_plural"	"beetles"
			"replacement"	"peenywally"
			"replacement_plural"	"peenywally dem"
			"replacement_plural"	"all a peenywally"
			"replacement_plural"	"peenywallies"
		}

		"1"
		{
			"word"	"avocado"
			"word_plural"	"avocados"
			"word"	"pear"
			"word_plural"	"pears"
			"replacement"	"peer"
			"replacement_plural"	"peer dem"
			"replacement_plural"	"all a peer"
			"replacement_plural"	"peers"
		}

		"1"
		{
			"word"	"equivalent"
			"word_plural"	"equivalents"
			"word"	"tylenol"
			"word_plural"	"tylenols"
			"word"	"excedrin"
			"word_plural"	"excedrins"
			"word"	"etc"
			"word_plural"	"etcs"
			"replacement"	"phensic"
			"replacement_plural"	"phensic dem"
			"replacement_plural"	"all a phensic"
			"replacement_plural"	"phensics"
		}

		"1"
		{
			"word"	"turn"
			"word_plural"	"turns"
			"replacement"	"picky-picky"
			"replacement_plural"	"picky-picky dem"
			"replacement_plural"	"all a picky-picky"
			"replacement_plural"	"picky-pickies"
		}

		"1"
		{
			"word"	"pickaninny"
			"word_plural"	"pickaninnies"
			"word"	"child"
			"word_plural"	"childs"
			"word"	"kid"
			"word_plural"	"kids"
			"replacement"	"pikny"
			"replacement_plural"	"pikny dem"
			"replacement_plural"	"all a pikny"
			"replacement_plural"	"piknies"
		}

		"1"
		{
			"word"	"peanut"
			"word_plural"	"peanuts"
			"replacement"	"pinda"
			"replacement_plural"	"pinda dem"
			"replacement_plural"	"all a pinda"
			"replacement_plural"	"pindas"
		}

		"1"
		{
			"word"	"low"
			"word_plural"	"lows"
			"word"	"wooden"
			"word_plural"	"woodens"
			"word"	"stool"
			"word_plural"	"stools"
			"replacement"	"pira"
			"replacement_plural"	"pira dem"
			"replacement_plural"	"all a pira"
			"replacement_plural"	"piras"
		}

		"1"
		{
			"word"	"type"
			"word_plural"	"types"
			"word"	"very"
			"word_plural"	"veries"
			"word"	"tiny"
			"word_plural"	"tinies"
			"word"	"ant"
			"word_plural"	"ants"
			"word"	"whose"
			"word_plural"	"whoses"
			"word"	"bite"
			"word_plural"	"bites"
			"word"	"hot"
			"word_plural"	"hots"
			"word"	"long-lasting"
			"word_plural"	"long-lastings"
			"word"	"resembles"
			"word_plural"	"resembleses"
			"word"	"sting"
			"word_plural"	"stings"
			"replacement"	"pity-me-likl"
			"replacement_plural"	"pity-me-likl dem"
			"replacement_plural"	"all a pity-me-likl"
			"replacement_plural"	"pity-me-likls"
		}

		"1"
		{
			"word"	"politics"
			"word_plural"	"politicses"
			"replacement"	"polytricks"
			"replacement_plural"	"polytricks dem"
			"replacement_plural"	"all a polytricks"
			"replacement_plural"	"polytrickses"
		}

		"1"
		{
			"word"	"politicians"
			"word_plural"	"politicianses"
			"replacement"	"polytricksters"
			"replacement_plural"	"polytricksters dem"
			"replacement_plural"	"all a polytricksters"
			"replacement_plural"	"polytricksterses"
		}

		"1"
		{
			"word"	"make"
			"word_plural"	"makes"
			"replacement"	"poppy-show"
			"replacement_plural"	"poppy-show dem"
			"replacement_plural"	"all a poppy-show"
			"replacement_plural"	"poppy-shows"
		}

		"1"
		{
			"word"	"watch"
			"word_plural"	"watches"
			"word"	"something"
			"word_plural"	"somethings"
			"replacement"	"pree"
			"replacement_plural"	"pree dem"
			"replacement_plural"	"all a pree"
			"replacement_plural"	"prees"
		}

		"1"
		{
			"word"	"woman's"
			"word_plural"	"woman'ses"
			"word"	"genitals"
			"word_plural"	"genitalses"
			"replacement"	"pum-pum"
			"replacement_plural"	"pum-pum dem"
			"replacement_plural"	"all a pum-pum"
			"replacement_plural"	"pum-pums"
		}

		"1"
		{
			"word"	"punni"
			"word_plural"	"punnis"
			"word"	"woman's"
			"word_plural"	"woman'ses"
			"word"	"genitals"
			"word_plural"	"genitalses"
			"replacement"	"punaani"
			"replacement_plural"	"punaani dem"
			"replacement_plural"	"all a punaani"
			"replacement_plural"	"punaanis"
		}

		"1"
		{
			"word"	"somersalt"
			"word_plural"	"somersalts"
			"replacement"	"puppalick"
			"replacement_plural"	"puppalick dem"
			"replacement_plural"	"all a puppalick"
			"replacement_plural"	"puppalicks"
		}

		"1"
		{
			"word"	"curse"
			"word_plural"	"curses"
			"word"	"ref"
			"word_plural"	"refs"
			"replacement"	"pussy clot"
			"replacement"	"pussy"
			"replacement"	"clot"
			"replacement_plural"	"pussy clot dem"
			"replacement_plural"	"all a pussy clot"
			"replacement_plural"	"pussy dem"
			"replacement_plural"	"all a pussy"
			"replacement_plural"	"pussies"
			"replacement_plural"	"clot dem"
			"replacement_plural"	"all a clot"
			"replacement_plural"	"clots"
		}

		"1"
		{
			"word"	"preposition"
			"word_plural"	"prepositions"
			"word"	"except"
			"word_plural"	"excepts"
			"replacement"	"puttin' away"
			"replacement"	"puttin'"
			"replacement"	"away"
			"replacement_plural"	"puttin' away dem"
			"replacement_plural"	"all a puttin' away"
			"replacement_plural"	"puttin' dem"
			"replacement_plural"	"all a puttin'"
			"replacement_plural"	"puttin's"
			"replacement_plural"	"away dem"
			"replacement_plural"	"all a away"
			"replacement_plural"	"aways"
		}

		"1"
		{
			"word"	"sickly"
			"word_plural"	"sicklies"
			"word"	"weak"
			"word_plural"	"weaks"
			"replacement"	"pyaa-pyaa"
			"replacement_plural"	"pyaa-pyaa dem"
			"replacement_plural"	"all a pyaa-pyaa"
			"replacement_plural"	"pyaa-pyaas"
		}

		"1"
		{
			"word"	"mild"
			"word_plural"	"milds"
			"word"	"expletive"
			"word_plural"	"expletives"
			"word"	"surprise"
			"word_plural"	"surprises"
			"word"	"vexation"
			"word_plural"	"vexations"
			"replacement"	"raatid!"
			"replacement_plural"	"raatid! dem"
			"replacement_plural"	"all a raatid!"
		}

		"1"
		{
			"word"	"style"
			"word_plural"	"styles"
			"word"	"reggae"
			"word_plural"	"reggaes"
			"word"	"uses"
			"word_plural"	"useses"
			"word"	"digital"
			"word_plural"	"digitals"
			"word"	"rhythms"
			"word_plural"	"rhythmses"
			"word"	"exclusively"
			"word_plural"	"exclusivelies"
			"replacement"	"ragga"
			"replacement_plural"	"ragga dem"
			"replacement_plural"	"all a ragga"
			"replacement_plural"	"raggas"
		}

		"1"
		{
			"word"	"ghetto"
			"word_plural"	"ghettos"
			"word"	"dweller"
			"word_plural"	"dwellers"
			"replacement"	"raggamuffin"
			"replacement_plural"	"raggamuffin dem"
			"replacement_plural"	"all a raggamuffin"
			"replacement_plural"	"raggamuffins"
		}

		"1"
		{
			"word"	"full"
			"word_plural"	"fulls"
			"replacement"	"ram"
			"replacement_plural"	"ram dem"
			"replacement_plural"	"all a ram"
			"replacement_plural"	"rams"
		}

		"1"
		{
			"word"	"someone"
			"word_plural"	"someones"
			"word"	"deals"
			"word_plural"	"dealses"
			"word"	"nuff"
			"word_plural"	"nuffs"
			"word"	"ladies"
			"word_plural"	"ladieses"
			"replacement"	"ram goat"
			"replacement"	"ram"
			"replacement"	"goat"
			"replacement_plural"	"ram goat dem"
			"replacement_plural"	"all a ram goat"
			"replacement_plural"	"ram dem"
			"replacement_plural"	"all a ram"
			"replacement_plural"	"rams"
			"replacement_plural"	"goat dem"
			"replacement_plural"	"all a goat"
			"replacement_plural"	"goats"
		}

		"1"
		{
			"word"	"highly"
			"word_plural"	"highlies"
			"word"	"respected"
			"word_plural"	"respecteds"
			"replacement"	"ranking"
			"replacement_plural"	"ranking dem"
			"replacement_plural"	"all a ranking"
			"replacement_plural"	"rankings"
		}

		"1"
		{
			"word"	"rass"
			"word_plural"	"rasses"
			"word"	"backside"
			"word_plural"	"backsides"
			"word"	"rump"
			"word_plural"	"rumps"
			"replacement"	"ras"
			"replacement_plural"	"ras dem"
			"replacement_plural"	"all a ras"
			"replacement_plural"	"rases"
		}

		"1"
		{
			"word"	"night-flying"
			"word_plural"	"night-flyings"
			"word"	"rodent"
			"word_plural"	"rodents"
			"replacement"	"rat-bat"
			"replacement_plural"	"rat-bat dem"
			"replacement_plural"	"all a rat-bat"
			"replacement_plural"	"rat-bats"
		}

		"1"
		{
			"word"	"switchblade"
			"word_plural"	"switchblades"
			"word"	"knife"
			"word_plural"	"knifes"
			"replacement"	"ratchet"
			"replacement_plural"	"ratchet dem"
			"replacement_plural"	"all a ratchet"
			"replacement_plural"	"ratchets"
		}

		"1"
		{
			"word"	"unbearably"
			"word_plural"	"unbearablies"
			"word"	"hungry"
			"word_plural"	"hungries"
			"word"	"starving"
			"word_plural"	"starvings"
			"word"	"famished"
			"word_plural"	"famisheds"
			"replacement"	"raw"
			"replacement_plural"	"raw dem"
			"replacement_plural"	"all a raw"
			"replacement_plural"	"raws"
		}

		"1"
		{
			"word"	"want"
			"word_plural"	"wants"
			"word"	"another"
			"word_plural"	"anothers"
			"word"	"persons"
			"word_plural"	"personses"
			"word"	"belonging"
			"word_plural"	"belongings"
			"word"	"envious"
			"word_plural"	"enviouses"
			"replacement"	"red eye"
			"replacement"	"red"
			"replacement"	"eye"
			"replacement_plural"	"red eye dem"
			"replacement_plural"	"all a red eye"
			"replacement_plural"	"red dem"
			"replacement_plural"	"all a red"
			"replacement_plural"	"reds"
			"replacement_plural"	"eye dem"
			"replacement_plural"	"all a eye"
			"replacement_plural"	"eyes"
		}

		"1"
		{
			"word"	"person"
			"word_plural"	"persons"
			"word"	"mulatto"
			"word_plural"	"mulattos"
			"word"	"mixed"
			"word_plural"	"mixeds"
			"word"	"parentage"
			"word_plural"	"parentages"
			"word"	"derogatively"
			"word_plural"	"derogativelies"
			"replacement"	"red ibo"
			"replacement"	"red"
			"replacement"	"ibo"
			"replacement_plural"	"red ibo dem"
			"replacement_plural"	"all a red ibo"
			"replacement_plural"	"red dem"
			"replacement_plural"	"all a red"
			"replacement_plural"	"reds"
			"replacement_plural"	"ibo dem"
			"replacement_plural"	"all a ibo"
			"replacement_plural"	"ibos"
		}

		"1"
		{
			"word"	"surprise"
			"word_plural"	"surprises"
			"word"	"enraged"
			"word_plural"	"enrageds"
			"replacement"	"rahtid"
			"replacement_plural"	"rahtid dem"
			"replacement_plural"	"all a rahtid"
			"replacement_plural"	"rahtids"
		}

		"1"
		{
			"word"	"curse-exclamation"
			"word_plural"	"curse-exclamations"
			"word"	"similar"
			"word_plural"	"similars"
			"word"	"hell"
			"word_plural"	"hells"
			"word"	"exclamination"
			"word_plural"	"exclaminations"
			"replacement"	"rhaatid"
			"replacement_plural"	"rhaatid dem"
			"replacement_plural"	"all a rhaatid"
			"replacement_plural"	"rhaatids"
		}

		"1"
		{
			"word"	"brand"
			"word_plural"	"brands"
			"word"	"rolling"
			"word_plural"	"rollings"
			"word"	"paper"
			"word_plural"	"papers"
			"replacement"	"rizzla"
			"replacement_plural"	"rizzla dem"
			"replacement_plural"	"all a rizzla"
			"replacement_plural"	"rizzlas"
		}

		"1"
		{
			"word"	"reggae"
			"word_plural"	"reggaes"
			"word"	"music"
			"word_plural"	"musics"
			"word"	"played"
			"word_plural"	"playeds"
			"word"	"latest"
			"word_plural"	"latests"
			"replacement"	"rockers"
			"replacement_plural"	"rockers dem"
			"replacement_plural"	"all a rockers"
			"replacement_plural"	"rockerses"
		}

		"1"
		{
			"word"	"flat"
			"word_plural"	"flats"
			"word"	"indian"
			"word_plural"	"indians"
			"word"	"breads"
			"word_plural"	"breadses"
			"replacement"	"roti"
			"replacement_plural"	"roti dem"
			"replacement_plural"	"all a roti"
			"replacement_plural"	"rotis"
		}

		"1"
		{
			"word"	"style"
			"word_plural"	"styles"
			"word"	"genres"
			"word_plural"	"genreses"
			"word"	"created"
			"word_plural"	"createds"
			"word"	"during"
			"word_plural"	"durings"
			"word"	"passage"
			"word_plural"	"passages"
			"word"	"between"
			"word_plural"	"betweens"
			"word"	"reggae"
			"word_plural"	"reggaes"
			"word"	"dancehall"
			"word_plural"	"dancehalls"
			"word"	"invented"
			"word_plural"	"inventeds"
			"word"	"end"
			"word_plural"	"ends"
			"replacement"	"rub-a-dub"
			"replacement_plural"	"rub-a-dub dem"
			"replacement_plural"	"all a rub-a-dub"
			"replacement_plural"	"rub-a-dubs"
		}

		"1"
		{
			"word"	"criminal"
			"word_plural"	"criminals"
			"word"	"hearted"
			"word_plural"	"hearteds"
			"word"	"person"
			"word_plural"	"persons"
			"word"	"tough"
			"word_plural"	"toughs"
			"word"	"guy"
			"word_plural"	"guys"
			"replacement"	"rude boy"
			"replacement"	"rude"
			"replacement"	"boy"
			"replacement_plural"	"rude boy dem"
			"replacement_plural"	"all a rude boy"
			"replacement_plural"	"rude dem"
			"replacement_plural"	"all a rude"
			"replacement_plural"	"rudes"
			"replacement_plural"	"boy dem"
			"replacement_plural"	"all a boy"
			"replacement_plural"	"boys"
		}

		"1"
		{
			"word"	"food"
			"word_plural"	"foods"
			"word"	"cooked"
			"word_plural"	"cookeds"
			"word"	"coconut"
			"word_plural"	"coconuts"
			"word"	"juice"
			"word_plural"	"juices"
			"word"	"obtained"
			"word_plural"	"obtaineds"
			"word"	"after"
			"word_plural"	"afters"
			"word"	"grating"
			"word_plural"	"gratings"
			"word"	"dry"
			"word_plural"	"dries"
			"word"	"meat"
			"word_plural"	"meats"
			"word"	"squeezing"
			"word_plural"	"squeezings"
			"replacement"	"run-dung"
			"replacement_plural"	"run-dung dem"
			"replacement_plural"	"all a run-dung"
			"replacement_plural"	"run-dungs"
		}

		"1"
		{
			"word"	"diarrhea"
			"word_plural"	"diarrheas"
			"replacement"	"running belly"
			"replacement"	"running"
			"replacement"	"belly"
			"replacement_plural"	"running belly dem"
			"replacement_plural"	"all a running belly"
			"replacement_plural"	"running dem"
			"replacement_plural"	"all a running"
			"replacement_plural"	"runnings"
			"replacement_plural"	"belly dem"
			"replacement_plural"	"all a belly"
			"replacement_plural"	"bellies"
		}

		"1"
		{
			"word"	"royal"
			"word_plural"	"royals"
			"replacement"	"ryal"
			"replacement_plural"	"ryal dem"
			"replacement_plural"	"all a ryal"
			"replacement_plural"	"ryals"
		}

		"1"
		{
			"word"	"money"
			"word_plural"	"moneys"
			"word"	"cash"
			"word_plural"	"cashes"
			"word"	"adjective"
			"word_plural"	"adjectives"
			"word"	"broke"
			"word_plural"	"brokes"
			"word"	"empty-handed"
			"word_plural"	"empty-handeds"
			"word"	"low"
			"word_plural"	"lows"
			"word"	"food"
			"word_plural"	"foods"
			"word"	"dough"
			"word_plural"	"doughs"
			"word"	"coins"
			"word_plural"	"coinses"
			"word"	"coin"
			"word_plural"	"coins"
			"replacement"	"salt"
			"replacement_plural"	"salt dem"
			"replacement_plural"	"all a salt"
			"replacement_plural"	"salts"
		}

		"1"
		{
			"word"	"colour"
			"word_plural"	"colours"
			"word"	"between"
			"word_plural"	"betweens"
			"word"	"brown"
			"word_plural"	"browns"
			"replacement"	"sambo"
			"replacement_plural"	"sambo dem"
			"replacement_plural"	"all a sambo"
			"replacement_plural"	"sambos"
		}

		"1"
		{
			"word"	"trickster"
			"word_plural"	"tricksters"
			"word"	"conman"
			"word_plural"	"conmans"
			"replacement"	"samfai man"
			"replacement"	"samfai"
			"replacement"	"man"
			"replacement_plural"	"samfai man dem"
			"replacement_plural"	"all a samfai man"
			"replacement_plural"	"samfai dem"
			"replacement_plural"	"all a samfai"
			"replacement_plural"	"samfais"
			"replacement_plural"	"man dem"
			"replacement_plural"	"all a man"
			"replacement_plural"	"mans"
		}

		"1"
		{
			"word"	"manipulator"
			"word_plural"	"manipulators"
			"word"	"dishonest"
			"word_plural"	"dishonests"
			"word"	"person"
			"word_plural"	"persons"
			"replacement"	"sanfi"
			"replacement_plural"	"sanfi dem"
			"replacement_plural"	"all a sanfi"
			"replacement_plural"	"sanfis"
		}

		"1"
		{
			"word"	"weakling"
			"word_plural"	"weaklings"
			"word"	"loser"
			"word_plural"	"losers"
			"replacement"	"saps"
			"replacement_plural"	"saps dem"
			"replacement_plural"	"all a saps"
			"replacement_plural"	"sapses"
		}

		"1"
		{
			"word"	"rejoice"
			"word_plural"	"rejoices"
			"word"	"meditate"
			"word_plural"	"meditates"
			"word"	"give"
			"word_plural"	"gives"
			"word"	"thanks"
			"word_plural"	"thankses"
			"word"	"praise"
			"word_plural"	"praises"
			"replacement"	"sata"
			"replacement_plural"	"sata dem"
			"replacement_plural"	"all a sata"
			"replacement_plural"	"satas"
		}

		"1"
		{
			"word"	"sit"
			"word_plural"	"sits"
			"word"	"rest"
			"word_plural"	"rests"
			"word"	"meditate"
			"word_plural"	"meditates"
			"word"	"relax"
			"word_plural"	"relaxes"
			"word"	"claim"
			"word_plural"	"claims"
			"word"	"spiritual"
			"word_plural"	"spirituals"
			"replacement"	"satta"
			"replacement_plural"	"satta dem"
			"replacement_plural"	"all a satta"
			"replacement_plural"	"sattas"
		}

		"1"
		{
			"word"	"witchcraft"
			"word_plural"	"witchcrafts"
			"replacement"	"science"
			"replacement_plural"	"science dem"
			"replacement_plural"	"all a science"
			"replacement_plural"	"sciences"
		}

		"1"
		{
			"word"	"occult"
			"word_plural"	"occults"
			"word"	"practitioner"
			"word_plural"	"practitioners"
			"replacement"	"scientist"
			"replacement_plural"	"scientist dem"
			"replacement_plural"	"all a scientist"
			"replacement_plural"	"scientists"
		}

		"1"
		{
			"word"	"denoting"
			"word_plural"	"denotings"
			"word"	"inferior"
			"word_plural"	"inferiors"
			"word"	"status"
			"word_plural"	"statuses"
			"replacement"	"scout"
			"replacement_plural"	"scout dem"
			"replacement_plural"	"all a scout"
			"replacement_plural"	"scouts"
		}

		"1"
		{
			"word"	"sneak"
			"word_plural"	"sneaks"
			"replacement"	"screechie"
			"replacement_plural"	"screechie dem"
			"replacement_plural"	"all a screechie"
			"replacement_plural"	"screechies"
		}

		"1"
		{
			"word"	"scowl"
			"word_plural"	"scowls"
			"word"	"angry"
			"word_plural"	"angries"
			"word"	"mad"
			"word_plural"	"mads"
			"word"	"irate"
			"word_plural"	"irates"
			"word"	"vexed"
			"word_plural"	"vexeds"
			"replacement"	"screw"
			"replacement_plural"	"screw dem"
			"replacement_plural"	"all a screw"
			"replacement_plural"	"screws"
		}

		"1"
		{
			"word"	"understand"
			"word_plural"	"understands"
			"word"	"agree"
			"word_plural"	"agrees"
			"replacement"	"seen"
			"replacement_plural"	"seen dem"
			"replacement_plural"	"all a seen"
			"replacement_plural"	"seens"
		}

		"1"
		{
			"word"	"understand"
			"word_plural"	"understands"
			"replacement"	"seen?"
			"replacement_plural"	"seen? dem"
			"replacement_plural"	"all a seen?"
		}

		"1"
		{
			"word"	"home-cured"
			"word_plural"	"home-cureds"
			"word"	"tobacco"
			"word_plural"	"tobaccos"
			"word"	"straight"
			"word_plural"	"straights"
			"replacement"	"shag"
			"replacement_plural"	"shag dem"
			"replacement_plural"	"all a shag"
			"replacement_plural"	"shags"
		}

		"1"
		{
			"word"	"leave"
			"word_plural"	"leaves"
			"word"	"haste"
			"word_plural"	"hastes"
			"word"	"casually"
			"word_plural"	"casuallies"
			"replacement"	"shake out"
			"replacement"	"shake"
			"replacement"	"out"
			"replacement_plural"	"shake out dem"
			"replacement_plural"	"all a shake out"
			"replacement_plural"	"shake dem"
			"replacement_plural"	"all a shake"
			"replacement_plural"	"shakes"
			"replacement_plural"	"out dem"
			"replacement_plural"	"all a out"
			"replacement_plural"	"outs"
		}

		"1"
		{
			"word"	"verb"
			"word_plural"	"verbs"
			"word"	"bother"
			"word_plural"	"bothers"
			"replacement"	"sheg"
			"replacement_plural"	"sheg dem"
			"replacement_plural"	"all a sheg"
			"replacement_plural"	"shegs"
		}

		"1"
		{
			"word"	"messed"
			"word_plural"	"messeds"
			"word"	"ruined"
			"word_plural"	"ruineds"
			"replacement"	"sheg-up"
			"replacement_plural"	"sheg-up dem"
			"replacement_plural"	"all a sheg-up"
			"replacement_plural"	"sheg-ups"
		}

		"1"
		{
			"word"	"shove"
			"word_plural"	"shoves"
			"replacement"	"shoob"
			"replacement_plural"	"shoob dem"
			"replacement_plural"	"all a shoob"
			"replacement_plural"	"shoobs"
		}

		"1"
		{
			"word"	"sit"
			"word_plural"	"sits"
			"replacement"	"sidung"
			"replacement_plural"	"sidung dem"
			"replacement_plural"	"all a sidung"
			"replacement_plural"	"sidungs"
		}

		"1"
		{
			"word"	"understand"
			"word_plural"	"understands"
			"replacement"	"sight?"
			"replacement_plural"	"sight? dem"
			"replacement_plural"	"all a sight?"
		}

		"1"
		{
			"word"	"aloevera"
			"word_plural"	"aloeveras"
			"word"	"plant"
			"word_plural"	"plants"
			"replacement"	"sinkl-bible"
			"replacement_plural"	"sinkl-bible dem"
			"replacement_plural"	"all a sinkl-bible"
			"replacement_plural"	"sinkl-bibles"
		}

		"1"
		{
			"word"	"something"
			"word_plural"	"somethings"
			"replacement"	"sinting"
			"replacement_plural"	"sinting dem"
			"replacement_plural"	"all a sinting"
			"replacement_plural"	"sintings"
		}

		"1"
		{
			"word"	"slippery"
			"word_plural"	"slipperies"
			"replacement"	"sipple"
			"replacement_plural"	"sipple dem"
			"replacement_plural"	"all a sipple"
			"replacement_plural"	"sipples"
		}

		"1"
		{
			"word"	"something"
			"word_plural"	"somethings"
			"replacement"	"sittin'"
			"replacement_plural"	"sittin' dem"
			"replacement_plural"	"all a sittin'"
			"replacement_plural"	"sittin's"
		}

		"1"
		{
			"word"	"dance"
			"word_plural"	"dances"
			"word"	"reggae"
			"word_plural"	"reggaes"
			"word"	"music"
			"word_plural"	"musics"
			"word"	"move"
			"word_plural"	"moves"
			"word"	"cunning"
			"word_plural"	"cunnings"
			"word"	"ulterior"
			"word_plural"	"ulteriors"
			"word"	"motives"
			"word_plural"	"motiveses"
			"replacement"	"skank"
			"replacement_plural"	"skank dem"
			"replacement_plural"	"all a skank"
			"replacement_plural"	"skanks"
		}

		"1"
		{
			"word"	"mantel"
			"word_plural"	"mantels"
			"word"	"another"
			"word_plural"	"anothers"
			"word"	"early"
			"word_plural"	"earlies"
			"word"	"phenomenon"
			"word_plural"	"phenomenons"
			"word"	"respectively"
			"word_plural"	"respectivelies"
			"word"	"woman"
			"word_plural"	"womans"
			"word"	"lives"
			"word_plural"	"liveses"
			"word"	"frivolous"
			"word_plural"	"frivolouses"
			"word"	"lifestyle"
			"word_plural"	"lifestyles"
			"word"	"possessing"
			"word_plural"	"possessings"
			"replacement"	"sketel"
			"replacement_plural"	"sketel dem"
			"replacement_plural"	"all a sketel"
			"replacement_plural"	"sketels"
		}

		"1"
		{
			"word"	"kiln"
			"word_plural"	"kilns"
			"replacement"	"skil"
			"replacement_plural"	"skil dem"
			"replacement_plural"	"all a skil"
			"replacement_plural"	"skils"
		}

		"1"
		{
			"word"	"rolling"
			"word_plural"	"rollings"
			"word"	"paper"
			"word_plural"	"papers"
			"replacement"	"skin"
			"replacement_plural"	"skin dem"
			"replacement_plural"	"all a skin"
			"replacement_plural"	"skins"
		}

		"1"
		{
			"word"	"smile"
			"word_plural"	"smiles"
			"word"	"plastic"
			"word_plural"	"plastics"
			"replacement"	"skin your teeth"
			"replacement_plural"	"skin your teeth dem"
			"replacement_plural"	"all a skin your teeth"
		}

		"1"
		{
			"word"	"fat"
			"word_plural"	"fats"
			"word"	"slobby"
			"word_plural"	"slobbies"
			"word"	"droopy"
			"word_plural"	"droopies"
			"replacement"	"slabba-slabba"
			"replacement_plural"	"slabba-slabba dem"
			"replacement_plural"	"all a slabba-slabba"
			"replacement_plural"	"slabba-slabbas"
		}

		"1"
		{
			"word"	"lewd"
			"word_plural"	"lewds"
			"word"	"vulgar"
			"word_plural"	"vulgars"
			"word"	"lyrics"
			"word_plural"	"lyricses"
			"word"	"singing"
			"word_plural"	"singings"
			"replacement"	"slackness"
			"replacement_plural"	"slackness dem"
			"replacement_plural"	"all a slackness"
			"replacement_plural"	"slacknesses"
		}

		"1"
		{
			"word"	"unkept"
			"word_plural"	"unkepts"
			"word"	"messy"
			"word_plural"	"messies"
			"replacement"	"slacky tidy"
			"replacement"	"slacky"
			"replacement"	"tidy"
			"replacement_plural"	"slacky tidy dem"
			"replacement_plural"	"all a slacky tidy"
			"replacement_plural"	"slacky dem"
			"replacement_plural"	"all a slacky"
			"replacement_plural"	"slackies"
			"replacement_plural"	"tidy dem"
			"replacement_plural"	"all a tidy"
			"replacement_plural"	"tidies"
		}

		"1"
		{
			"word"	"awesome"
			"word_plural"	"awesomes"
			"word"	"great"
			"word_plural"	"greats"
			"replacement"	"slap weh"
			"replacement"	"slap"
			"replacement"	"weh"
			"replacement_plural"	"slap weh dem"
			"replacement_plural"	"all a slap weh"
			"replacement_plural"	"slap dem"
			"replacement_plural"	"all a slap"
			"replacement_plural"	"slaps"
			"replacement_plural"	"weh dem"
			"replacement_plural"	"all a weh"
			"replacement_plural"	"wehs"
		}

		"1"
		{
			"word"	"somebody"
			"word_plural"	"somebodies"
			"replacement"	"smadi"
			"replacement_plural"	"smadi dem"
			"replacement_plural"	"all a smadi"
			"replacement_plural"	"smadis"
		}

		"1"
		{
			"word"	"only"
			"word_plural"	"onlies"
			"word"	"solely"
			"word_plural"	"solelies"
			"word"	"unaccompanied"
			"word_plural"	"unaccompanieds"
			"replacement"	"so-so"
			"replacement_plural"	"so-so dem"
			"replacement_plural"	"all a so-so"
			"replacement_plural"	"so-sos"
		}

		"1"
		{
			"word"	"well"
			"word_plural"	"wells"
			"word"	"amateurish"
			"word_plural"	"amateurishes"
			"replacement"	"soft"
			"replacement_plural"	"soft dem"
			"replacement_plural"	"all a soft"
			"replacement_plural"	"softs"
		}

		"1"
		{
			"word"	"usually"
			"word_plural"	"usuallies"
			"word"	"derogatory"
			"word_plural"	"derogatories"
			"word"	"selecter"
			"word_plural"	"selecters"
			"word"	"other"
			"word_plural"	"others"
			"word"	"personality"
			"word_plural"	"personalities"
			"word"	"another"
			"word_plural"	"anothers"
			"replacement"	"soundbwoy"
			"replacement_plural"	"soundbwoy dem"
			"replacement_plural"	"all a soundbwoy"
			"replacement_plural"	"soundbwoys"
		}

		"1"
		{
			"word"	"huge"
			"word_plural"	"huges"
			"word"	"mobile"
			"word_plural"	"mobiles"
			"word"	"stereo"
			"word_plural"	"stereos"
			"word"	"setups"
			"word_plural"	"setupses"
			"word"	"manned"
			"word_plural"	"manneds"
			"word"	"djs"
			"word_plural"	"djses"
			"word"	"became"
			"word_plural"	"becames"
			"word"	"celebrities"
			"word_plural"	"celebritieses"
			"word"	"traveled"
			"word_plural"	"traveleds"
			"word"	"host"
			"word_plural"	"hosts"
			"replacement"	"sound system"
			"replacement"	"sound"
			"replacement"	"system"
			"replacement_plural"	"sound system dem"
			"replacement_plural"	"all a sound system"
			"replacement_plural"	"sound dem"
			"replacement_plural"	"all a sound"
			"replacement_plural"	"sounds"
			"replacement_plural"	"system dem"
			"replacement_plural"	"all a system"
			"replacement_plural"	"systems"
		}

		"1"
		{
			"word"	"marijuana"
			"word_plural"	"marijuanas"
			"word"	"weed"
			"word_plural"	"weeds"
			"word"	"cone-shaped"
			"word_plural"	"cone-shapeds"
			"word"	"cigarette"
			"word_plural"	"cigarettes"
			"replacement"	"spliff"
			"replacement_plural"	"spliff dem"
			"replacement_plural"	"all a spliff"
			"replacement_plural"	"spliffs"
		}

		"1"
		{
			"word"	"sprout"
			"word_plural"	"sprouts"
			"word"	"yams"
			"word_plural"	"yamses"
			"word"	"cocos"
			"word_plural"	"cocoses"
			"word"	"making"
			"word_plural"	"makings"
			"word"	"inedible"
			"word_plural"	"inedibles"
			"replacement"	"spring"
			"replacement_plural"	"spring dem"
			"replacement_plural"	"all a spring"
			"replacement_plural"	"springs"
		}

		"1"
		{
			"word"	"affection"
			"word_plural"	"affections"
			"word"	"camaraderie"
			"word_plural"	"camaraderies"
			"replacement"	"star"
			"replacement_plural"	"star dem"
			"replacement_plural"	"all a star"
			"replacement_plural"	"stars"
		}

		"1"
		{
			"word"	"leave"
			"word_plural"	"leaves"
			"word"	"depart"
			"word_plural"	"departs"
			"word"	"briskly"
			"word_plural"	"brisklies"
			"word"	"quickly"
			"word_plural"	"quicklies"
			"word"	"stoosh"
			"word_plural"	"stooshes"
			"word"	"stoshus"
			"word_plural"	"stoshuses"
			"word"	"upper"
			"word_plural"	"uppers"
			"word"	"class"
			"word_plural"	"classes"
			"word"	"high"
			"word_plural"	"highs"
			"replacement"	"step"
			"replacement_plural"	"step dem"
			"replacement_plural"	"all a step"
			"replacement_plural"	"steps"
		}

		"1"
		{
			"word"	"muscial"
			"word_plural"	"muscials"
			"word"	"rehearsal"
			"word_plural"	"rehearsals"
			"replacement"	"string up"
			"replacement"	"string"
			"replacement"	"up"
			"replacement_plural"	"string up dem"
			"replacement_plural"	"all a string up"
			"replacement_plural"	"string dem"
			"replacement_plural"	"all a string"
			"replacement_plural"	"strings"
			"replacement_plural"	"up dem"
			"replacement_plural"	"all a up"
			"replacement_plural"	"ups"
		}

		"1"
		{
			"word"	"body"
			"word_plural"	"bodies"
			"word"	"health"
			"word_plural"	"healths"
			"replacement"	"structure"
			"replacement_plural"	"structure dem"
			"replacement_plural"	"all a structure"
			"replacement_plural"	"structures"
		}

		"1"
		{
			"word"	"gossip"
			"word_plural"	"gossips"
			"word"	"wispering"
			"word_plural"	"wisperings"
			"word"	"rumor"
			"word_plural"	"rumors"
			"word"	"rumour"
			"word_plural"	"rumours"
			"word"	"talk"
			"word_plural"	"talks"
			"replacement"	"su-su"
			"replacement_plural"	"su-su dem"
			"replacement_plural"	"all a su-su"
			"replacement_plural"	"su-sus"
		}

		"1"
		{
			"word"	"poor"
			"word_plural"	"poors"
			"word"	"person"
			"word_plural"	"persons"
			"word"	"stuggling"
			"word_plural"	"stugglings"
			"word"	"survive"
			"word_plural"	"survives"
			"word"	"supm"
			"word_plural"	"supms"
			"word"	"something"
			"word_plural"	"somethings"
			"replacement"	"sufferer"
			"replacement_plural"	"sufferer dem"
			"replacement_plural"	"all a sufferer"
			"replacement_plural"	"sufferers"
		}

		"1"
		{
			"word"	"bullet"
			"word_plural"	"bullets"
			"replacement"	"tack"
			"replacement_plural"	"tack dem"
			"replacement_plural"	"all a tack"
			"replacement_plural"	"tacks"
		}

		"1"
		{
			"word"	"long"
			"word_plural"	"longs"
			"replacement"	"tall"
			"replacement_plural"	"tall dem"
			"replacement_plural"	"all a tall"
			"replacement_plural"	"talls"
		}

		"1"
		{
			"word"	"deep"
			"word_plural"	"deeps"
			"word"	"woolen"
			"word_plural"	"woolens"
			"word"	"hat"
			"word_plural"	"hats"
			"word"	"dreads"
			"word_plural"	"dreadses"
			"word"	"cover"
			"word_plural"	"covers"
			"word"	"their"
			"word_plural"	"theirs"
			"word"	"locks"
			"word_plural"	"lockses"
			"replacement"	"tam"
			"replacement_plural"	"tam dem"
			"replacement_plural"	"all a tam"
			"replacement_plural"	"tams"
		}

		"1"
		{
			"word"	"stand"
			"word_plural"	"stands"
			"replacement"	"tan'"
			"replacement_plural"	"tan' dem"
			"replacement_plural"	"all a tan'"
			"replacement_plural"	"tan's"
		}

		"1"
		{
			"word"	"polite"
			"word_plural"	"polites"
			"word"	"expressing"
			"word_plural"	"expressings"
			"word"	"omitted"
			"word_plural"	"omitteds"
			"word"	"words"
			"word_plural"	"wordses"
			"word"	"verbal"
			"word_plural"	"verbals"
			"word"	"asterisk"
			"word_plural"	"asterisks"
			"replacement"	"tarra-warra"
			"replacement_plural"	"tarra-warra dem"
			"replacement_plural"	"all a tarra-warra"
			"replacement_plural"	"tarra-warras"
		}

		"1"
		{
			"word"	"little"
			"word_plural"	"littles"
			"word"	"thatched"
			"word_plural"	"thatcheds"
			"word"	"hut"
			"word_plural"	"huts"
			"word"	"made"
			"word_plural"	"mades"
			"word"	"bamboo"
			"word_plural"	"bamboos"
			"replacement"	"tatu"
			"replacement_plural"	"tatu dem"
			"replacement_plural"	"all a tatu"
			"replacement_plural"	"tatus"
		}

		"1"
		{
			"word"	"bullets"
			"word_plural"	"bulletses"
			"replacement"	"teeth"
			"replacement_plural"	"teeth dem"
			"replacement_plural"	"all a teeth"
			"replacement_plural"	"teeths"
		}

		"1"
		{
			"word"	"theif"
			"word_plural"	"theifs"
			"word"	"steal"
			"word_plural"	"steals"
			"word"	"rob"
			"word_plural"	"robs"
			"word"	"pilfer"
			"word_plural"	"pilfers"
			"replacement"	"teif"
			"replacement_plural"	"teif dem"
			"replacement_plural"	"all a teif"
			"replacement_plural"	"teifs"
		}

		"1"
		{
			"word"	"because"
			"word_plural"	"becauses"
			"replacement"	"thru'"
			"replacement_plural"	"thru' dem"
			"replacement_plural"	"all a thru'"
			"replacement_plural"	"thru's"
		}

		"1"
		{
			"word"	"rap"
			"word_plural"	"raps"
			"replacement"	"toast"
			"replacement_plural"	"toast dem"
			"replacement_plural"	"all a toast"
			"replacement_plural"	"toasts"
		}

		"1"
		{
			"word"	"coconut"
			"word_plural"	"coconuts"
			"word"	"cake"
			"word_plural"	"cakes"
			"replacement"	"toto"
			"replacement_plural"	"toto dem"
			"replacement_plural"	"all a toto"
			"replacement_plural"	"totos"
		}

		"1"
		{
			"word"	"snobby"
			"word_plural"	"snobbies"
			"word"	"person"
			"word_plural"	"persons"
			"replacement"	"topanoris"
			"replacement_plural"	"topanoris dem"
			"replacement_plural"	"all a topanoris"
			"replacement_plural"	"topanorises"
		}

		"1"
		{
			"word"	"curse"
			"word_plural"	"curses"
			"word"	"speak"
			"word_plural"	"speaks"
			"word"	"abusively"
			"word_plural"	"abusivelies"
			"word"	"someone"
			"word_plural"	"someones"
			"replacement"	"trace"
			"replacement_plural"	"trace dem"
			"replacement_plural"	"all a trace"
			"replacement_plural"	"traces"
		}

		"1"
		{
			"word"	"vehicle"
			"word_plural"	"vehicles"
			"word"	"car"
			"word_plural"	"cars"
			"word"	"truck"
			"word_plural"	"trucks"
			"word"	"ride"
			"word_plural"	"rides"
			"replacement"	"transport"
			"replacement_plural"	"transport dem"
			"replacement_plural"	"all a transport"
			"replacement_plural"	"transports"
		}

		"1"
		{
			"word"	"female"
			"word_plural"	"females"
			"word"	"organ"
			"word_plural"	"organs"
			"replacement"	"tunti"
			"replacement_plural"	"tunti dem"
			"replacement_plural"	"all a tunti"
			"replacement_plural"	"tuntis"
		}

		"1"
		{
			"word"	"postitive"
			"word_plural"	"postitives"
			"word"	"encouraging"
			"word_plural"	"encouragings"
			"replacement"	"upful"
			"replacement_plural"	"upful dem"
			"replacement_plural"	"all a upful"
			"replacement_plural"	"upfuls"
		}

		"1"
		{
			"word"	"positive"
			"word_plural"	"positives"
			"word"	"righteous"
			"word_plural"	"righteouses"
			"replacement"	"uphill"
			"replacement_plural"	"uphill dem"
			"replacement_plural"	"all a uphill"
			"replacement_plural"	"uphills"
		}

		"1"
		{
			"word"	"upper"
			"word_plural"	"uppers"
			"word"	"classes"
			"word_plural"	"classeses"
			"replacement"	"uptown"
			"replacement_plural"	"uptown dem"
			"replacement_plural"	"all a uptown"
			"replacement_plural"	"uptowns"
		}

		"1"
		{
			"word"	"vanquish"
			"word_plural"	"vanquishes"
			"replacement"	"vank"
			"replacement_plural"	"vank dem"
			"replacement_plural"	"all a vank"
			"replacement_plural"	"vanks"
		}

		"1"
		{
			"word"	"get"
			"word_plural"	"gets"
			"word"	"angry"
			"word_plural"	"angries"
			"word"	"mad"
			"word_plural"	"mads"
			"word"	"irate"
			"word_plural"	"irates"
			"word"	"vexed"
			"word_plural"	"vexeds"
			"replacement"	"vex"
			"replacement_plural"	"vex dem"
			"replacement_plural"	"all a vex"
			"replacement_plural"	"vexes"
		}

		"1"
		{
			"word"	"adverbial"
			"word_plural"	"adverbials"
			"word"	"phrase"
			"word_plural"	"phrases"
			"word"	"other"
			"word_plural"	"others"
			"replacement"	"wa day"
			"replacement"	"wa"
			"replacement"	"day"
			"replacement_plural"	"wa day dem"
			"replacement_plural"	"all a wa day"
			"replacement_plural"	"wa dem"
			"replacement_plural"	"all a wa"
			"replacement_plural"	"was"
			"replacement_plural"	"day dem"
			"replacement_plural"	"all a day"
			"replacement_plural"	"days"
		}

		"1"
		{
			"word"	"we'll"
			"word_plural"	"we'lls"
			"word"	"have"
			"word_plural"	"haves"
			"word"	"deal"
			"word_plural"	"deals"
			"replacement"	"whafedoo"
			"replacement_plural"	"whafedoo dem"
			"replacement_plural"	"all a whafedoo"
			"replacement_plural"	"whafedoos"
		}

		"1"
		{
			"word"	"wattle"
			"word_plural"	"wattles"
			"word"	"kind"
			"word_plural"	"kinds"
			"word"	"woven"
			"word_plural"	"wovens"
			"word"	"bamboo"
			"word_plural"	"bamboos"
			"word"	"work"
			"word_plural"	"works"
			"word"	"make"
			"word_plural"	"makes"
			"word"	"house"
			"word_plural"	"houses"
			"word"	"walls"
			"word_plural"	"wallses"
			"replacement"	"wakl"
			"replacement_plural"	"wakl dem"
			"replacement_plural"	"all a wakl"
			"replacement_plural"	"wakls"
		}

		"1"
		{
			"word"	"someone"
			"word_plural"	"someones"
			"word"	"jumps"
			"word_plural"	"jumpses"
			"word"	"cause"
			"word_plural"	"causes"
			"word"	"fundamentally"
			"word_plural"	"fundamentallies"
			"word"	"committed"
			"word_plural"	"committeds"
			"replacement"	"waggonist"
			"replacement_plural"	"waggonist dem"
			"replacement_plural"	"all a waggonist"
			"replacement_plural"	"waggonists"
		}

		"1"
		{
			"word"	"hungry-belly"
			"word_plural"	"hungry-bellies"
			"replacement"	"wanga-gut"
			"replacement_plural"	"wanga-gut dem"
			"replacement_plural"	"all a wanga-gut"
			"replacement_plural"	"wanga-guts"
		}

		"1"
		{
			"word"	"politely"
			"word_plural"	"politelies"
			"word"	"omitted"
			"word_plural"	"omitteds"
			"word"	"words"
			"word_plural"	"wordses"
			"word"	"same"
			"word_plural"	"sames"
			"replacement"	"warra-warra"
			"replacement_plural"	"warra-warra dem"
			"replacement_plural"	"all a warra-warra"
			"replacement_plural"	"warra-warras"
		}

		"1"
		{
			"word"	"kind"
			"word_plural"	"kinds"
			"word"	"fish"
			"word_plural"	"fishes"
			"word"	"brother"
			"word_plural"	"brothers"
			"word"	"john"
			"word_plural"	"johns"
			"word"	"have"
			"word_plural"	"haves"
			"word"	"any"
			"word_plural"	"anies"
			"replacement"	"wenchman"
			"replacement_plural"	"wenchman dem"
			"replacement_plural"	"all a wenchman"
			"replacement_plural"	"wenchmans"
		}

		"1"
		{
			"word"	"what's"
			"word_plural"	"what'ses"
			"word"	"happening"
			"word_plural"	"happenings"
			"replacement"	"wh'appen?"
			"replacement_plural"	"wh'appen? dem"
			"replacement_plural"	"all a wh'appen?"
		}

		"1"
		{
			"word"	"what's"
			"word_plural"	"what'ses"
			"word"	"left"
			"word_plural"	"lefts"
			"replacement"	"whatlef"
			"replacement_plural"	"whatlef dem"
			"replacement_plural"	"all a whatlef"
			"replacement_plural"	"whatlefs"
		}

		"1"
		{
			"word"	"vehicle"
			"word_plural"	"vehicles"
			"word"	"car"
			"word_plural"	"cars"
			"word"	"truck"
			"word_plural"	"trucks"
			"word"	"ride"
			"word_plural"	"rides"
			"replacement"	"wheels"
			"replacement_plural"	"wheels dem"
			"replacement_plural"	"all a wheels"
			"replacement_plural"	"wheelses"
		}

		"1"
		{
			"word"	"lot"
			"word_plural"	"lots"
			"replacement"	"whole heap"
			"replacement"	"whole"
			"replacement"	"heap"
			"replacement_plural"	"whole heap dem"
			"replacement_plural"	"all a whole heap"
			"replacement_plural"	"whole dem"
			"replacement_plural"	"all a whole"
			"replacement_plural"	"wholes"
			"replacement_plural"	"heap dem"
			"replacement_plural"	"all a heap"
			"replacement_plural"	"heaps"
		}

		"1"
		{
			"word"	"appears"
			"word_plural"	"appearses"
			"word"	"every"
			"word_plural"	"everies"
			"word"	"west"
			"word_plural"	"wests"
			"word"	"indian"
			"word_plural"	"indians"
			"word"	"dialect"
			"word_plural"	"dialects"
			"word"	"literally"
			"word_plural"	"literallies"
			"word"	"corruption"
			"word_plural"	"corruptions"
			"word"	"wind"
			"word_plural"	"winds"
			"replacement"	"wine"
			"replacement_plural"	"wine dem"
			"replacement_plural"	"all a wine"
			"replacement_plural"	"wines"
		}

		"1"
		{
			"word"	"thin"
			"word_plural"	"thins"
			"word"	"sickly"
			"word_plural"	"sicklies"
			"word"	"looking"
			"word_plural"	"lookings"
			"replacement"	"winjy"
			"replacement_plural"	"winjy dem"
			"replacement_plural"	"all a winjy"
			"replacement_plural"	"winjies"
		}

		"1"
		{
			"word"	"vine"
			"word_plural"	"vines"
			"word"	"liana"
			"word_plural"	"lianas"
			"replacement"	"wis"
			"replacement_plural"	"wis dem"
			"replacement_plural"	"all a wis"
			"replacement_plural"	"wises"
		}

		"1"
		{
			"word"	"non-rasta"
			"word_plural"	"non-rastas"
			"word"	"deadlocks"
			"word_plural"	"deadlockses"
			"replacement"	"wolf"
			"replacement_plural"	"wolf dem"
			"replacement_plural"	"all a wolf"
			"replacement_plural"	"wolfs"
		}

		"1"
		{
			"word"	"penis"
			"word_plural"	"penises"
			"replacement"	"wood"
			"replacement_plural"	"wood dem"
			"replacement_plural"	"all a wood"
			"replacement_plural"	"woods"
		}

		"1"
		{
			"word"	"dancing"
			"word_plural"	"dancings"
			"word"	"sensually"
			"word_plural"	"sensuallies"
			"replacement"	"whyne dung"
			"replacement"	"whyne"
			"replacement"	"dung"
			"replacement_plural"	"whyne dung dem"
			"replacement_plural"	"all a whyne dung"
			"replacement_plural"	"whyne dem"
			"replacement_plural"	"all a whyne"
			"replacement_plural"	"whynes"
			"replacement_plural"	"dung dem"
			"replacement_plural"	"all a dung"
			"replacement_plural"	"dungs"
		}

		"1"
		{
			"word"	"hear"
			"word_plural"	"hears"
			"word"	"here"
			"word_plural"	"heres"
			"replacement"	"ya"
			"replacement_plural"	"ya dem"
			"replacement_plural"	"all a ya"
			"replacement_plural"	"yas"
		}

		"1"
		{
			"word"	"clay"
			"word_plural"	"clays"
			"word"	"pot"
			"word_plural"	"pots"
			"replacement"	"yabba"
			"replacement_plural"	"yabba dem"
			"replacement_plural"	"all a yabba"
			"replacement_plural"	"yabbas"
		}

		"1"
		{
			"word"	"dancehall"
			"word_plural"	"dancehalls"
			"replacement"	"yaga yaga"
			"replacement"	"yaga"
			"replacement_plural"	"yaga yaga dem"
			"replacement_plural"	"all a yaga yaga"
			"replacement_plural"	"yaga dem"
			"replacement_plural"	"all a yaga"
			"replacement_plural"	"yagas"
		}

		"1"
		{
			"word"	"here"
			"word_plural"	"heres"
			"replacement"	"yahso"
			"replacement_plural"	"yahso dem"
			"replacement_plural"	"all a yahso"
			"replacement_plural"	"yahsos"
		}

		"1"
		{
			"word"	"home"
			"word_plural"	"homes"
			"word"	"one's"
			"word_plural"	"one'ses"
			"word"	"tenement"
			"word_plural"	"tenements"
			"replacement"	"yard"
			"replacement_plural"	"yard dem"
			"replacement_plural"	"all a yard"
			"replacement_plural"	"yards"
		}

		"1"
		{
			"word"	"child"
			"word_plural"	"childs"
			"word"	"young"
			"word_plural"	"youngs"
			"word"	"immature"
			"word_plural"	"immatures"
			"word"	"kid"
			"word_plural"	"kids"
			"replacement"	"youth"
			"replacement_plural"	"youth dem"
			"replacement_plural"	"all a youth"
			"replacement_plural"	"youths"
		}

		"1"
		{
			"word"	"talk"
			"word_plural"	"talks"
			"replacement"	"yush"
			"replacement_plural"	"yush dem"
			"replacement_plural"	"all a yush"
			"replacement_plural"	"yushes"
		}

		"1"
		{
			"word"	"ethiopia"
			"word_plural"	"ethiopias"
			"word"	"africa"
			"word_plural"	"africas"
			"word"	"holy"
			"word_plural"	"holies"
			"word"	"land"
			"word_plural"	"lands"
			"replacement"	"Zion"
			"replacement_plural"	"Zion dem"
			"replacement_plural"	"all a Zion"
			"replacement_plural"	"Zions"
		}

		"1"
		{
			"word"	"zinc"
			"word_plural"	"zincs"
			"replacement"	"zungu pan"
			"replacement"	"zungu"
			"replacement"	"pan"
			"replacement_plural"	"zungu pan dem"
			"replacement_plural"	"all a zungu pan"
			"replacement_plural"	"zungu dem"
			"replacement_plural"	"all a zungu"
			"replacement_plural"	"zungus"
			"replacement_plural"	"pan dem"
			"replacement_plural"	"all a pan"
			"replacement_plural"	"pans"
		}

		"1"
		{
			"word"	"stay"
			"word_plural"	"stays"
			"word"	"trouble"
			"word_plural"	"troubles"
			"word"	"gossip"
			"word_plural"	"gossips"
			"replacement"	"'me come yah fi drink milk, me no come yah fi count cow"
			"replacement_plural"	"'me come yah fi drink milk, me no come yah fi count cow dem"
			"replacement_plural"	"all a 'me come yah fi drink milk, me no come yah fi count cow"
		}

		"1"
		{
			"word"	"tan"
			"word_plural"	"tans"
			"word"	"tedy"
			"word_plural"	"tedies"
			"word"	"stand"
			"word_plural"	"stands"
			"word"	"steady"
			"word_plural"	"steadies"
			"word"	"hold"
			"word_plural"	"holds"
			"word"	"still"
			"word_plural"	"stills"
			"replacement"	"'a so im tan' (that is what he is like) 'tan deh"
			"replacement_plural"	"'a so im tan' (that is what he is like) 'tan deh dem"
			"replacement_plural"	"all a 'a so im tan' (that is what he is like) 'tan deh"
		}

		"1"
		{
			"word"	"tastes"
			"word_plural"	"tasteses"
			"word"	"good"
			"word_plural"	"goods"
			"word"	"ruin"
			"word_plural"	"ruins"
			"replacement"	"'what sweet nanny goat a go run him belly' is a cautionary jamaican proverb which translated"
			"replacement_plural"	"'what sweet nanny goat a go run him belly' is a cautionary jamaican proverb which translated dem"
			"replacement_plural"	"all a 'what sweet nanny goat a go run him belly' is a cautionary jamaican proverb which translated"
		}

		"1"
		{
			"word"	"make"
			"word_plural"	"makes"
			"word"	"fun"
			"word_plural"	"funs"
			"word"	"someone"
			"word_plural"	"someones"
			"word"	"shame"
			"word_plural"	"shames"
			"word"	"making"
			"word_plural"	"makings"
			"word"	"look"
			"word_plural"	"looks"
			"word"	"ridiculous"
			"word_plural"	"ridiculouses"
			"replacement"	"'tek smadi mek poppy-show', which"
			"replacement_plural"	"'tek smadi mek poppy-show', which dem"
			"replacement_plural"	"all a 'tek smadi mek poppy-show', which"
		}

		"1"
		{
			"word"	"every"
			"word_plural"	"everies"
			"word"	"silver"
			"word_plural"	"silvers"
			"word"	"lining"
			"word_plural"	"linings"
			"word"	"has"
			"word_plural"	"hases"
			"word"	"dark"
			"word_plural"	"darks"
			"word"	"cloud"
			"word_plural"	"clouds"
			"word"	"even"
			"word_plural"	"evens"
			"word"	"happiest"
			"word_plural"	"happiests"
			"replacement"	"'chicken merry; hawk deh (is) near', it's a jamaican proverb which simply"
			"replacement_plural"	"'chicken merry; hawk deh (is) near', it's a jamaican proverb which simply dem"
			"replacement_plural"	"all a 'chicken merry; hawk deh (is) near', it's a jamaican proverb which simply"
		}

		"1"
		{
			"word"	"giving"
			"word_plural"	"givings"
			"word"	"help"
			"word_plural"	"helps"
			"word"	"someone"
			"word_plural"	"someones"
			"word"	"show"
			"word_plural"	"shows"
			"word"	"sign"
			"word_plural"	"signs"
			"word"	"thanks"
			"word_plural"	"thankses"
			"word"	"even"
			"word_plural"	"evens"
			"word"	"scorn"
			"word_plural"	"scorns"
			"replacement"	"'sorry for maga dog, maga dog turn round bite you'. this metaphor extends very well to all manner and sort of do-gooding and should be considered before any hasty acts of charity"
			"replacement_plural"	"'sorry for maga dog, maga dog turn round bite you'. this metaphor extends very well to all manner and sort of do-gooding and should be considered before any hasty acts of charity dem"
			"replacement_plural"	"all a 'sorry for maga dog, maga dog turn round bite you'. this metaphor extends very well to all manner and sort of do-gooding and should be considered before any hasty acts of charity"
		}

		"1"
		{
			"word"	"something"
			"word_plural"	"somethings"
			"word"	"terrible"
			"word_plural"	"terribles"
			"word"	"happen"
			"word_plural"	"happens"
			"word"	"don't"
			"word_plural"	"don'ts"
			"word"	"frightened"
			"word_plural"	"frighteneds"
			"replacement"	"'wha eye no see, heart no leap'"
			"replacement_plural"	"'wha eye no see, heart no leap' dem"
			"replacement_plural"	"all a 'wha eye no see, heart no leap'"
		}

		"1"
		{
			"word"	"you're"
			"word_plural"	"you'res"
			"word"	"going"
			"word_plural"	"goings"
			"word"	"put"
			"word_plural"	"puts"
			"word"	"side"
			"word_plural"	"sides"
			"replacement"	"'mi a maas a money' (or item), it"
			"replacement_plural"	"'mi a maas a money' (or item), it dem"
			"replacement_plural"	"all a 'mi a maas a money' (or item), it"
		}

		"1"
		{
			"word"	"other"
			"word_plural"	"others"
			"word"	"words"
			"word_plural"	"wordses"
			"replacement"	"'who colt de game' - it implies that someone made a wrong move, deliberately, to change the outcome of the plan. so who colt the game? babylon"
			"replacement_plural"	"'who colt de game' - it implies that someone made a wrong move, deliberately, to change the outcome of the plan. so who colt the game? babylon dem"
			"replacement_plural"	"all a 'who colt de game' - it implies that someone made a wrong move, deliberately, to change the outcome of the plan. so who colt the game? babylon"
		}

		"1"
		{
			"word"	"someone"
			"word_plural"	"someones"
			"word"	"much"
			"word_plural"	"muches"
			"word"	"johncrow"
			"word_plural"	"johncrows"
			"word"	"jumps"
			"word_plural"	"jumpses"
			"word"	"any"
			"word_plural"	"anies"
			"word"	"opportunity"
			"word_plural"	"opportunities"
			"word"	"prey"
			"word_plural"	"preys"
			"word"	"else"
			"word_plural"	"elses"
			"replacement"	"johncrow feel cool breeze is a very old ja proverb that roughly"
			"replacement_plural"	"johncrow feel cool breeze is a very old ja proverb that roughly dem"
			"replacement_plural"	"all a johncrow feel cool breeze is a very old ja proverb that roughly"
		}

		"1"
		{
			"word"	"she's"
			"word_plural"	"she'ses"
			"word"	"canefield"
			"word_plural"	"canefields"
			"word"	"worker"
			"word_plural"	"workers"
			"replacement"	"after the cane is cut, everything is taken away except the brown root, which is basically useless. and the field workers, being poor, wear a kind of cheap flip flop called a 'booga wooga.' so if you see miss brown downtown and she's got brown sugar all over her booga wooga, it"
			"replacement_plural"	"after the cane is cut, everything is taken away except the brown root, which is basically useless. and the field workers, being poor, wear a kind of cheap flip flop called a 'booga wooga.' so if you see miss brown downtown and she's got brown sugar all over her booga wooga, it dem"
			"replacement_plural"	"all a after the cane is cut, everything is taken away except the brown root, which is basically useless. and the field workers, being poor, wear a kind of cheap flip flop called a 'booga wooga.' so if you see miss brown downtown and she's got brown sugar all over her booga wooga, it"
		}

		"1"
		{
			"word"	"tell"
			"word_plural"	"tells"
			"word"	"listen"
			"word_plural"	"listens"
			"word"	"now"
			"word_plural"	"nows"
			"word"	"widely"
			"word_plural"	"widelies"
			"word"	"i'm"
			"word_plural"	"i'ms"
			"replacement"	"'so mi go so dem' = 'so mi go so den' = 'so mi go so then' this phrase is used in reggae/dancehall songs and made popular by recording artiste sean paul, which he includes in several of his songs such as the song titled 'like glue'. in the context of his songs it basically"
			"replacement_plural"	"'so mi go so dem' = 'so mi go so den' = 'so mi go so then' this phrase is used in reggae/dancehall songs and made popular by recording artiste sean paul, which he includes in several of his songs such as the song titled 'like glue'. in the context of his songs it basically dem"
			"replacement_plural"	"all a 'so mi go so dem' = 'so mi go so den' = 'so mi go so then' this phrase is used in reggae/dancehall songs and made popular by recording artiste sean paul, which he includes in several of his songs such as the song titled 'like glue'. in the context of his songs it basically"
		}

		"1"
		{
			"word"	"phrase"
			"word_plural"	"phrases"
			"word"	"usually"
			"word_plural"	"usuallies"
			"word"	"said"
			"word_plural"	"saids"
			"word"	"reference"
			"word_plural"	"references"
			"word"	"school"
			"word_plural"	"schools"
			"word"	"children"
			"word_plural"	"childrens"
			"word"	"returning"
			"word_plural"	"returnings"
			"word"	"end"
			"word_plural"	"ends"
			"replacement"	"'yuh free paper bun' 'your free time is up"
			"replacement_plural"	"'yuh free paper bun' 'your free time is up dem"
			"replacement_plural"	"all a 'yuh free paper bun' 'your free time is up"
		}

		"1"
		{
			"word"	"phrase"
			"word_plural"	"phrases"
			"word"	"usually"
			"word_plural"	"usuallies"
			"word"	"meant"
			"word_plural"	"meants"
			"word"	"calm"
			"word_plural"	"calms"
			"word"	"situation"
			"word_plural"	"situations"
			"word"	"advise"
			"word_plural"	"advises"
			"word"	"someone"
			"word_plural"	"someones"
			"word"	"get"
			"word_plural"	"gets"
			"replacement"	"'jus buil"
			"replacement_plural"	"'jus buil dem"
			"replacement_plural"	"all a 'jus buil"
		}

		"1"
		{
			"word"	"calls"
			"word_plural"	"callses"
			"word"	"you're"
			"word_plural"	"you'res"
			"word"	"very"
			"word_plural"	"veries"
			"word"	"unlucky"
			"word_plural"	"unluckies"
			"replacement"	"'yuh salt bad"
			"replacement_plural"	"'yuh salt bad dem"
			"replacement_plural"	"all a 'yuh salt bad"
		}

		"1"
		{
			"word"	"literally"
			"word_plural"	"literallies"
			"word"	"translates"
			"word_plural"	"translateses"
			"word"	"closer"
			"word_plural"	"closers"
			"replacement"	"'yuh seet"
			"replacement_plural"	"'yuh seet dem"
			"replacement_plural"	"all a 'yuh seet"
		}

	}
}`;

function autorp(name: string): string {
    switch (name.trim().toLowerCase()) {
        case "autorp":
            return autorp_tf2;
        case "autorp_patois":
            return autorp_patois;
        default:
            return autorp_tf2;
    }
}

export default autorp;
