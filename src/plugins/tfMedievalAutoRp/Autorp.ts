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
		"Wah gwan,"	"1"
		"Irie,"	"1"
		"Bredren,"	"1"
		"Jah know,"	"1"
		"Respect,"	"1"
		"Wah gwan,"	"1"
		"Irie,"	"1"
		"Bredren,"	"1"
		"Jah know,"	"1"
		"Respect,"	"1"
		"Seen,"	"1"
		"Yow,"	"1"
		"Hear mi nuh,"	"1"
		"Bless up,"	"1"
		"Raas,"	"1"
	}
	"appended_words"
	{
		"Seen?"	"1"
		"Ya zimme?"	"1"
		"Nuh true?"	"1"
		"Irie!"	"1"
		"Mon."	"1"
		"|a nuh see?"	"1"
		"Star."	"1"
		"Yuh zimme?"	"1"
	}
	"word_replacements"
	{
		"1"
		{
			"word"	"the"
			"chance"	"2"
			"replacement"	"di"
		}

		"1"
		{
			"word"	"this"
			"chance"	"2"
			"replacement"	"dis"
			"replacement"	"dis ya"
		}

		"1"
		{
			"word"	"that"
			"chance"	"2"
			"replacement"	"dat"
		}

		"1"
		{
			"word"	"i"
			"word"	"me"
			"chance"	"2"
			"replacement"	"mi"
			"replacement"	"i-man"
		}

		"1"
		{
			"word"	"my"
			"word"	"mine"
			"chance"	"2"
			"replacement"	"fi mi"
			"replacement"	"mi"
		}

		"1"
		{
			"word"	"you"
			"word"	"u"
			"chance"	"2"
			"replacement"	"yuh"
		}

		"1"
		{
			"word"	"your"
			"word"	"yours"
			"chance"	"2"
			"replacement"	"fi yuh"
			"replacement"	"yuh"
		}

		"1"
		{
			"word"	"we"
			"word"	"us"
			"chance"	"3"
			"replacement"	"wi"
			"replacement"	"i an i"
		}

		"1"
		{
			"word"	"they"
			"word"	"them"
			"chance"	"2"
			"replacement"	"dem"
		}

		"1"
		{
			"word"	"don't"
			"word"	"dont"
			"word"	"do not"
			"chance"	"2"
			"replacement"	"nuh"
		}

		"1"
		{
			"word"	"can't"
			"word"	"cant"
			"chance"	"2"
			"replacement"	"cyaan"
		}

		"1"
		{
			"word"	"not"
			"chance"	"2"
			"replacement"	"nuh"
		}

		"1"
		{
			"word"	"is"
			"word"	"are"
			"word"	"am"
			"chance"	"4"
			"replacement"	"a"
			"replacement"	"deh"
		}

		"1"
		{
			"prev"	"going"
			"word"	"to"
			"chance"	"1"
			"replacement"	"a"
		}

		"1"
		{
			"prev"	"going"
			"word"	"to"
			"chance"	"2"
			"replacement"	"a go"
		}

		"1"
		{
			"prev"	"have"
			"word"	"to"
			"chance"	"1"
			"replacement"	"haffi"
		}

		"1"
		{
			"prev"	"want"
			"word"	"to"
			"chance"	"1"
			"replacement"	"waan"
		}

		"1"
		{
			"prev"	"safe"
			"word"	"trip"
			"chance"	"1"
			"replacement"	"cool runnings"
		}

		"1"
		{
			"prev"	"come"
			"word"	"here"
			"chance"	"1"
			"replacement"	"come yah"
		}

		"1"
		{
			"prev"	"look"
			"word"	"here"
			"chance"	"1"
			"replacement"	"cu ya"
			"replacement"	"pree dis"
		}

		"1"
		{
			"prev"	"look"
			"word"	"there"
			"chance"	"1"
			"replacement"	"cu deh"
			"replacement"	"pree dat"
		}

		"1"
		{
			"prev"	"-"
			"word"	"beard"
			"replacement"	"cepes"
		}

		"1"
		{
			"word"	"-you"
			"replacement"	"the i"
		}

		"1"
		{
			"word"	"acclaimed"
			"word_plural"	"acclaimeds"
			"replacement"	"hortical"
			"replacement_plural"	"hortical dem"
		}

		"1"
		{
			"word"	"accompong"
			"word_plural"	"accompongs"
			"replacement"	"accompong"
			"replacement_plural"	"accompong dem"
		}

		"1"
		{
			"word"	"adj"
			"replacement"	"ilie"
			"replacement"	"alias"
			"replacement"	"boasie"
			"replacement"	"rhygin"
			"replacement"	"cromanty"
			"replacement"	"tallowah"
		}

		"1"
		{
			"word"	"adv"
			"replacement"	"nah"
		}

		"1"
		{
			"prev"	"adverbial"
			"word"	"phrase"
			"replacement"	"wa day"
			"replacement"	"gaan a bed"
		}

		"1"
		{
			"word"	"affectionate"
			"word_plural"	"affectionates"
			"replacement"	"tata"
			"replacement_plural"	"tata dem"
		}

		"1"
		{
			"word"	"africa"
			"word_plural"	"africas"
			"replacement"	"zion"
			"replacement_plural"	"zion dem"
		}

		"1"
		{
			"word"	"aggressive"
			"word_plural"	"aggressives"
			"replacement"	"rhygin"
			"replacement_plural"	"rhygin dem"
		}

		"1"
		{
			"word"	"albino"
			"word_plural"	"albinos"
			"replacement"	"dundus"
			"replacement"	"doondoos"
			"replacement_plural"	"dundus dem"
			"replacement_plural"	"doondoos dem"
		}

		"1"
		{
			"prev"	"albino"
			"word"	"buzzard"
			"replacement"	"head man jancro"
		}

		"1"
		{
			"prev"	"aloevera"
			"word"	"plant"
			"replacement"	"sinkl-bible"
		}

		"1"
		{
			"word"	"amateurish"
			"word_plural"	"amateurishes"
			"replacement"	"soft"
			"replacement_plural"	"soft dem"
		}

		"1"
		{
			"prev"	"amnancy"
			"word"	"figure"
			"replacement"	"ginnal"
		}

		"1"
		{
			"word"	"amongst"
			"word_plural"	"amongsts"
			"replacement"	"monks"
			"replacement_plural"	"monks dem"
		}

		"1"
		{
			"word"	"amount"
			"word_plural"	"amounts"
			"replacement"	"quips"
			"replacement_plural"	"quips dem"
		}

		"1"
		{
			"word"	"angry"
			"word_plural"	"angries"
			"replacement"	"bex"
			"replacement"	"vex"
			"replacement_plural"	"bex dem"
			"replacement_plural"	"vex dem"
		}

		"1"
		{
			"word"	"anus"
			"replacement"	"batty"
		}

		"1"
		{
			"word"	"aside"
			"word_plural"	"asides"
			"replacement"	"crab"
			"replacement_plural"	"crab dem"
		}

		"1"
		{
			"word"	"ask"
			"replacement"	"aks"
		}

		"1"
		{
			"prev"	"attract"
			"word"	"attention"
			"replacement"	"yaga yaga"
		}

		"1"
		{
			"word"	"avaricious"
			"replacement"	"gravalicious"
		}

		"1"
		{
			"prev"	"avocado"
			"word"	"pear"
			"replacement"	"peer"
		}

		"1"
		{
			"word"	"awesome"
			"word_plural"	"awesomes"
			"replacement"	"slap weh"
			"replacement_plural"	"slap weh dem"
		}

		"1"
		{
			"word"	"awkward"
			"word_plural"	"awkwards"
			"replacement"	"bafan"
			"replacement_plural"	"bafan dem"
		}

		"1"
		{
			"word"	"backside"
			"word_plural"	"backsides"
			"replacement"	"batty"
			"replacement"	"bumbo"
			"replacement_plural"	"batty dem"
			"replacement_plural"	"bumbo dem"
		}

		"1"
		{
			"prev"	"bad"
			"word"	"luck"
			"replacement"	"crosses"
		}

		"1"
		{
			"prev"	"balance"
			"word"	"something"
			"replacement"	"cotch"
		}

		"1"
		{
			"word"	"bald-headed"
			"replacement"	"peel-head"
		}

		"1"
		{
			"word"	"bandit"
			"word_plural"	"bandits"
			"replacement"	"bandulu"
			"replacement_plural"	"bandulu dem"
		}

		"1"
		{
			"word"	"bat"
			"replacement"	"rat-bat"
		}

		"1"
		{
			"word"	"be-little"
			"replacement"	"cold i up"
		}

		"1"
		{
			"prev"	"beas"
			"word"	"wild"
			"replacement"	"leggo"
		}

		"1"
		{
			"word"	"bench"
			"word_plural"	"benches"
			"replacement"	"cotch"
			"replacement_plural"	"cotch dem"
		}

		"1"
		{
			"word"	"betrayer"
			"word_plural"	"betrayers"
			"replacement"	"bag-o-wire"
			"replacement_plural"	"bag-o-wire dem"
		}

		"1"
		{
			"word"	"big"
			"replacement"	"slabba-slabba"
		}

		"1"
		{
			"prev"	"big"
			"word"	"basket"
			"replacement"	"bankra"
		}

		"1"
		{
			"prev"	"big-time"
			"word"	"criminals"
			"replacement"	"mafia"
		}

		"1"
		{
			"word"	"bird"
			"word_plural"	"birds"
			"replacement"	"bud"
			"replacement_plural"	"bud dem"
		}

		"1"
		{
			"word"	"black"
			"word_plural"	"blacks"
			"replacement"	"royal"
			"replacement"	"sambo"
			"replacement_plural"	"royal dem"
			"replacement_plural"	"sambo dem"
		}

		"1"
		{
			"prev"	"blood"
			"word"	"clot"
			"replacement"	"clot"
		}

		"1"
		{
			"word"	"blubbery"
			"word_plural"	"blubberies"
			"replacement"	"bufu-bufu"
			"replacement_plural"	"bufu-bufu dem"
		}

		"1"
		{
			"prev"	"blue"
			"word"	"draws"
			"replacement"	"dokunu"
		}

		"1"
		{
			"prev"	"boderation"
			"word"	"comes"
			"replacement"	"boderation"
		}

		"1"
		{
			"word"	"body"
			"word_plural"	"bodies"
			"replacement"	"structure"
			"replacement_plural"	"structure dem"
		}

		"1"
		{
			"word"	"bonafide"
			"word_plural"	"bonafides"
			"replacement"	"yaga yaga"
			"replacement_plural"	"yaga yaga dem"
		}

		"1"
		{
			"word"	"boss"
			"replacement"	"mr. t"
		}

		"1"
		{
			"word"	"bother"
			"word_plural"	"bothers"
			"replacement"	"sheg"
			"replacement"	"hackle"
			"replacement_plural"	"sheg dem"
			"replacement_plural"	"hackle dem"
		}

		"1"
		{
			"word"	"bottom"
			"word_plural"	"bottoms"
			"replacement"	"batty"
			"replacement"	"bumbo"
			"replacement_plural"	"batty dem"
			"replacement_plural"	"bumbo dem"
		}

		"1"
		{
			"word"	"boy"
			"replacement"	"bwoy"
		}

		"1"
		{
			"word"	"brand-new"
			"replacement"	"crissars"
		}

		"1"
		{
			"word"	"break"
			"word_plural"	"breaks"
			"replacement"	"clap"
			"replacement_plural"	"clap dem"
		}

		"1"
		{
			"word"	"brethren"
			"word_plural"	"brethrens"
			"replacement"	"yaga yaga"
			"replacement_plural"	"yaga yaga dem"
		}

		"1"
		{
			"word"	"broke"
			"word_plural"	"brokes"
			"replacement"	"salt"
			"replacement_plural"	"salt dem"
		}

		"1"
		{
			"prev"	"brush"
			"word"	"haircut"
			"replacement"	"picky"
			"replacement"	"picky head"
		}

		"1"
		{
			"word"	"bullet"
			"word_plural"	"bullets"
			"replacement"	"corn"
			"replacement"	"tack"
			"replacement_plural"	"corn dem"
			"replacement_plural"	"tack dem"
		}

		"1"
		{
			"word"	"bullets"
			"replacement"	"teeth"
		}

		"1"
		{
			"word"	"bully"
			"word_plural"	"bullies"
			"replacement"	"bull bucka"
			"replacement_plural"	"bull bucka dem"
		}

		"1"
		{
			"prev"	"bump"
			"word"	"against"
			"replacement"	"bunks"
		}

		"1"
		{
			"word"	"burn"
			"word_plural"	"burns"
			"replacement"	"bun"
			"replacement_plural"	"bun dem"
		}

		"1"
		{
			"word"	"butterfly"
			"word_plural"	"butterflies"
			"replacement"	"bat"
			"replacement_plural"	"bat dem"
		}

		"1"
		{
			"word"	"buzzard"
			"word_plural"	"buzzards"
			"replacement"	"jancro"
			"replacement_plural"	"jancro dem"
		}

		"1"
		{
			"word"	"bye"
			"replacement"	"bless up"
			"replacement"	"more time"
			"replacement"	"walk good"
			"replacement"	"likkle more"
		}

		"1"
		{
			"word"	"calabash"
			"word_plural"	"calabashes"
			"replacement"	"paki"
			"replacement_plural"	"paki dem"
		}

		"1"
		{
			"word"	"camaraderie"
			"word_plural"	"camaraderies"
			"replacement"	"star"
			"replacement_plural"	"star dem"
		}

		"1"
		{
			"word"	"can"
			"replacement"	"cyan"
		}

		"1"
		{
			"prev"	"can"
			"word"	"t"
			"replacement"	"cyaan"
		}

		"1"
		{
			"word"	"capt"
			"word_plural"	"capts"
			"replacement"	"accompong"
			"replacement_plural"	"accompong dem"
		}

		"1"
		{
			"word"	"care"
			"word_plural"	"cares"
			"replacement"	"cya"
			"replacement_plural"	"cya dem"
		}

		"1"
		{
			"word"	"careless"
			"replacement"	"cya"
		}

		"1"
		{
			"word"	"caribbean"
			"word_plural"	"caribbeans"
			"replacement"	"higglers"
			"replacement_plural"	"higglers dem"
		}

		"1"
		{
			"word"	"carry"
			"word_plural"	"carries"
			"replacement"	"cyai"
			"replacement_plural"	"cyai dem"
		}

		"1"
		{
			"word"	"cash"
			"word_plural"	"cashes"
			"replacement"	"coil"
			"replacement"	"duns"
			"replacement"	"funds"
			"replacement_plural"	"coil dem"
			"replacement_plural"	"duns dem"
			"replacement_plural"	"funds dem"
		}

		"1"
		{
			"word"	"casually"
			"word_plural"	"casuallies"
			"replacement"	"shake out"
			"replacement_plural"	"shake out dem"
		}

		"1"
		{
			"prev"	"certain"
			"word"	"time"
			"replacement"	"iwa"
		}

		"1"
		{
			"word"	"chains"
			"replacement"	"manacles"
		}

		"1"
		{
			"prev"	"chamber"
			"word"	"pot"
			"replacement"	"chimmy"
		}

		"1"
		{
			"word"	"chance"
			"word_plural"	"chances"
			"replacement"	"bly"
			"replacement_plural"	"bly dem"
		}

		"1"
		{
			"word"	"chat"
			"word_plural"	"chats"
			"replacement"	"laba-laba"
			"replacement_plural"	"laba-laba dem"
		}

		"1"
		{
			"word"	"cheap"
			"word_plural"	"cheaps"
			"replacement"	"kallaloo"
			"replacement_plural"	"kallaloo dem"
		}

		"1"
		{
			"word"	"cheeky"
			"word_plural"	"cheekies"
			"replacement"	"fiesty"
			"replacement_plural"	"fiesty dem"
		}

		"1"
		{
			"word"	"child"
			"word_plural"	"childs"
			"replacement"	"baggy"
			"replacement"	"pikny"
			"replacement"	"youth"
			"replacement"	"pickney"
			"replacement_plural"	"baggy dem"
			"replacement_plural"	"pikny dem"
			"replacement_plural"	"youth dem"
			"replacement_plural"	"pickney dem"
		}

		"1"
		{
			"prev"	"chillum"
			"word"	"pipe"
			"replacement"	"kouchie"
		}

		"1"
		{
			"word"	"chit-chat"
			"replacement"	"labrish"
		}

		"1"
		{
			"word"	"choosy"
			"word_plural"	"choosies"
			"replacement"	"fenky-fenky"
			"replacement"	"picky-picky"
			"replacement_plural"	"fenky-fenky dem"
			"replacement_plural"	"picky-picky dem"
		}

		"1"
		{
			"prev"	"christian"
			"word"	"revival"
			"replacement"	"poco"
			"replacement"	"pocomania"
		}

		"1"
		{
			"word"	"church"
			"word_plural"	"churches"
			"replacement"	"babylon"
			"replacement_plural"	"babylon dem"
		}

		"1"
		{
			"word"	"cloth"
			"word_plural"	"cloths"
			"replacement"	"clot"
			"replacement_plural"	"clot dem"
		}

		"1"
		{
			"word"	"clumsy"
			"word_plural"	"clumsies"
			"replacement"	"bafan"
			"replacement"	"bufu-bufu"
			"replacement_plural"	"bafan dem"
			"replacement_plural"	"bufu-bufu dem"
		}

		"1"
		{
			"word"	"coarse"
			"word_plural"	"coarses"
			"replacement"	"quashie"
			"replacement_plural"	"quashie dem"
		}

		"1"
		{
			"prev"	"coconut"
			"word"	"cake"
			"replacement"	"toto"
		}

		"1"
		{
			"word"	"cocos"
			"replacement"	"spring"
		}

		"1"
		{
			"prev"	"cola"
			"word"	"nut"
			"replacement"	"bissy"
		}

		"1"
		{
			"word"	"comfortable"
			"word_plural"	"comfortables"
			"replacement"	"homely"
			"replacement_plural"	"homely dem"
		}

		"1"
		{
			"prev"	"communal"
			"word"	"living"
			"replacement"	"bobo dread"
		}

		"1"
		{
			"prev"	"comon"
			"word"	"sugar"
			"replacement"	"bulla"
		}

		"1"
		{
			"word"	"completely"
			"word_plural"	"completelies"
			"replacement"	"fullness"
			"replacement"	"to the fullness"
			"replacement_plural"	"fullness dem"
			"replacement_plural"	"to the fullness dem"
		}

		"1"
		{
			"word"	"compliment"
			"word_plural"	"compliments"
			"replacement"	"bad bwai"
			"replacement_plural"	"bad bwai dem"
		}

		"1"
		{
			"word"	"con-man"
			"replacement"	"ginnal"
		}

		"1"
		{
			"word"	"conceited"
			"word_plural"	"conceiteds"
			"replacement"	"boasie"
			"replacement_plural"	"boasie dem"
		}

		"1"
		{
			"word"	"conman"
			"word_plural"	"conmans"
			"replacement"	"samfai man"
			"replacement_plural"	"samfai man dem"
		}

		"1"
		{
			"word"	"conquer"
			"word_plural"	"conquers"
			"replacement"	"vank"
			"replacement_plural"	"vank dem"
		}

		"1"
		{
			"word"	"consecrated"
			"word_plural"	"consecrateds"
			"replacement"	"nazarite"
			"replacement_plural"	"nazarite dem"
		}

		"1"
		{
			"word"	"contempt"
			"word_plural"	"contempts"
			"replacement"	"cut yai"
			"replacement_plural"	"cut yai dem"
		}

		"1"
		{
			"word"	"contention"
			"word_plural"	"contentions"
			"replacement"	"kass kass"
			"replacement_plural"	"kass kass dem"
		}

		"1"
		{
			"word"	"cool"
			"word_plural"	"cools"
			"replacement"	"irie"
			"replacement"	"i-rey"
			"replacement_plural"	"irie dem"
			"replacement_plural"	"i-rey dem"
		}

		"1"
		{
			"prev"	"cool"
			"word"	"operator"
			"replacement"	"general"
		}

		"1"
		{
			"word"	"coolie-rial"
			"replacement"	"royal"
		}

		"1"
		{
			"word"	"cop"
			"replacement"	"beast"
			"replacement"	"babylon"
		}

		"1"
		{
			"word"	"copycat"
			"word_plural"	"copycats"
			"replacement"	"falla fashin"
			"replacement_plural"	"falla fashin dem"
		}

		"1"
		{
			"prev"	"corrupt"
			"word"	"establishment"
			"replacement"	"babylon"
		}

		"1"
		{
			"prev"	"country"
			"word"	"bumpkin"
			"replacement"	"quashie"
		}

		"1"
		{
			"word"	"covetous"
			"replacement"	"cubbitch"
		}

		"1"
		{
			"word"	"crayfish"
			"word_plural"	"crayfishes"
			"replacement"	"janga"
			"replacement_plural"	"janga dem"
		}

		"1"
		{
			"word"	"criminal"
			"word_plural"	"criminals"
			"replacement"	"bandulu"
			"replacement"	"rude boy"
			"replacement_plural"	"bandulu dem"
			"replacement_plural"	"rude boy dem"
		}

		"1"
		{
			"word"	"crisp"
			"word_plural"	"crisps"
			"replacement"	"cris"
			"replacement"	"crissars"
			"replacement_plural"	"cris dem"
			"replacement_plural"	"crissars dem"
		}

		"1"
		{
			"word"	"crowded"
			"word_plural"	"crowdeds"
			"replacement"	"cork up"
			"replacement_plural"	"cork up dem"
		}

		"1"
		{
			"word"	"cruel"
			"word_plural"	"cruels"
			"replacement"	"dogheart"
			"replacement_plural"	"dogheart dem"
		}

		"1"
		{
			"word"	"curse"
			"word_plural"	"curses"
			"replacement"	"trace"
			"replacement_plural"	"trace dem"
		}

		"1"
		{
			"prev"	"curse"
			"word"	"words"
			"replacement"	"ras clot"
			"replacement"	"blood clot"
		}

		"1"
		{
			"word"	"curse-exclamation"
			"replacement"	"rhaatid"
		}

		"1"
		{
			"word"	"dance"
			"word_plural"	"dances"
			"replacement"	"bashment"
			"replacement_plural"	"bashment dem"
		}

		"1"
		{
			"word"	"dancehall"
			"word_plural"	"dancehalls"
			"replacement"	"rub-a-dub"
			"replacement_plural"	"rub-a-dub dem"
		}

		"1"
		{
			"prev"	"dancing"
			"word"	"sensually"
			"replacement"	"whyne dung"
		}

		"1"
		{
			"word"	"dangerous"
			"replacement"	"alias"
			"replacement"	"macca"
		}

		"1"
		{
			"prev"	"dangerous"
			"word"	"macca"
			"replacement"	"dildo macca"
		}

		"1"
		{
			"word"	"dark"
			"word_plural"	"darks"
			"replacement"	"kallaloo"
			"replacement_plural"	"kallaloo dem"
		}

		"1"
		{
			"word"	"decent"
			"word_plural"	"decents"
			"replacement"	"deestant"
			"replacement_plural"	"deestant dem"
		}

		"1"
		{
			"word"	"demoman"
			"word_plural"	"demomans"
			"replacement"	"madman"
			"replacement"	"shotta"
			"replacement"	"swordsman"
			"replacement_plural"	"madman dem"
			"replacement_plural"	"shotta dem"
			"replacement_plural"	"swordsman dem"
		}

		"1"
		{
			"prev"	"depart"
			"word"	"briskly"
			"replacement"	"step"
		}

		"1"
		{
			"word"	"derived"
			"word_plural"	"deriveds"
			"replacement"	"roots"
			"replacement_plural"	"roots dem"
		}

		"1"
		{
			"prev"	"desirable"
			"word"	"woman"
			"replacement"	"beef"
		}

		"1"
		{
			"word"	"destroy"
			"word_plural"	"destroys"
			"replacement"	"mash up"
			"replacement"	"mash down"
			"replacement_plural"	"mash up dem"
			"replacement_plural"	"mash down dem"
		}

		"1"
		{
			"word"	"devotion"
			"word_plural"	"devotions"
			"replacement"	"nazarite"
			"replacement_plural"	"nazarite dem"
		}

		"1"
		{
			"word"	"diarrhea"
			"word_plural"	"diarrheas"
			"replacement"	"running belly"
			"replacement_plural"	"running belly dem"
		}

		"1"
		{
			"word"	"dirt"
			"word_plural"	"dirts"
			"replacement"	"doti"
			"replacement_plural"	"doti dem"
		}

		"1"
		{
			"word"	"dirty"
			"word_plural"	"dirties"
			"replacement"	"dutty"
			"replacement_plural"	"dutty dem"
		}

		"1"
		{
			"prev"	"dirty"
			"word"	"person"
			"replacement"	"buguyaga"
		}

		"1"
		{
			"word"	"disappointment"
			"word_plural"	"disappointments"
			"replacement"	"cho"
			"replacement"	"kiss teet"
			"replacement_plural"	"cho dem"
			"replacement_plural"	"kiss teet dem"
		}

		"1"
		{
			"word"	"dishonest"
			"word_plural"	"dishonests"
			"replacement"	"pyaka"
			"replacement_plural"	"pyaka dem"
		}

		"1"
		{
			"word"	"dislike"
			"word_plural"	"dislikes"
			"replacement"	"kiss teet"
			"replacement_plural"	"kiss teet dem"
		}

		"1"
		{
			"word"	"disorder"
			"word_plural"	"disorders"
			"replacement"	"bangarang"
			"replacement_plural"	"bangarang dem"
		}

		"1"
		{
			"word"	"disorderly"
			"word_plural"	"disorderlies"
			"replacement"	"leggo"
			"replacement"	"chaka-chaka"
			"replacement_plural"	"leggo dem"
			"replacement_plural"	"chaka-chaka dem"
		}

		"1"
		{
			"word"	"disturbance"
			"word_plural"	"disturbances"
			"replacement"	"bangarang"
			"replacement_plural"	"bangarang dem"
		}

		"1"
		{
			"word"	"divinations"
			"replacement"	"obeah"
		}

		"1"
		{
			"prev"	"djew"
			"word"	"rain"
			"replacement"	"djew"
		}

		"1"
		{
			"word"	"don"
			"replacement"	"notch"
		}

		"1"
		{
			"word"	"donkya"
			"word_plural"	"donkyas"
			"replacement"	"cya"
			"replacement_plural"	"cya dem"
		}

		"1"
		{
			"word"	"dread"
			"word_plural"	"dreads"
			"replacement"	"crucial"
			"replacement_plural"	"crucial dem"
		}

		"1"
		{
			"word"	"dreadlocks"
			"replacement"	"natty"
			"replacement"	"natty congo"
			"replacement"	"natty dread"
		}

		"1"
		{
			"word"	"drizzle"
			"word_plural"	"drizzles"
			"replacement"	"juu"
			"replacement_plural"	"juu dem"
		}

		"1"
		{
			"word"	"droopy"
			"word_plural"	"droopies"
			"replacement"	"slabba-slabba"
			"replacement_plural"	"slabba-slabba dem"
		}

		"1"
		{
			"word"	"dumb"
			"word_plural"	"dumbs"
			"replacement"	"mumu"
			"replacement_plural"	"mumu dem"
		}

		"1"
		{
			"word"	"ears"
			"replacement"	"iez"
			"replacement"	"hiez"
		}

		"1"
		{
			"word"	"ears-hard"
			"replacement"	"iez-haad"
			"replacement"	"hiez-haad"
		}

		"1"
		{
			"word"	"earth"
			"word_plural"	"earths"
			"replacement"	"doti"
			"replacement_plural"	"doti dem"
		}

		"1"
		{
			"word"	"eat"
			"replacement"	"nyam"
		}

		"1"
		{
			"word"	"eddo"
			"word_plural"	"eddos"
			"replacement"	"coco"
			"replacement_plural"	"coco dem"
		}

		"1"
		{
			"prev"	"effeminate"
			"word"	"man"
			"replacement"	"maama man"
		}

		"1"
		{
			"word"	"emphatic"
			"word_plural"	"emphatics"
			"replacement"	"nah"
			"replacement_plural"	"nah dem"
		}

		"1"
		{
			"word"	"empty-handed"
			"replacement"	"salt"
		}

		"1"
		{
			"word"	"encouraging"
			"word_plural"	"encouragings"
			"replacement"	"upful"
			"replacement_plural"	"upful dem"
		}

		"1"
		{
			"word"	"engineer"
			"word_plural"	"engineers"
			"replacement"	"smith"
			"replacement"	"builder"
			"replacement"	"mechanic"
			"replacement_plural"	"smith dem"
			"replacement_plural"	"builder dem"
			"replacement_plural"	"mechanic dem"
		}

		"1"
		{
			"word"	"envious"
			"replacement"	"red eye"
		}

		"1"
		{
			"word"	"etc"
			"replacement"	"clot"
			"replacement"	"obeah"
			"replacement"	"phensic"
		}

		"1"
		{
			"word"	"ethiopia"
			"word_plural"	"ethiopias"
			"replacement"	"zion"
			"replacement_plural"	"zion dem"
		}

		"1"
		{
			"prev"	"even"
			"word"	"sacred"
			"replacement"	"ilie"
		}

		"1"
		{
			"word"	"evil"
			"word_plural"	"evils"
			"replacement"	"armageddon"
			"replacement_plural"	"armageddon dem"
		}

		"1"
		{
			"word"	"ewe"
			"replacement"	"tata"
		}

		"1"
		{
			"word"	"exalted"
			"word_plural"	"exalteds"
			"replacement"	"ilie"
			"replacement_plural"	"ilie dem"
		}

		"1"
		{
			"word"	"excedrin"
			"word_plural"	"excedrins"
			"replacement"	"phensic"
			"replacement_plural"	"phensic dem"
		}

		"1"
		{
			"word"	"excellent"
			"word_plural"	"excellents"
			"replacement"	"hard"
			"replacement"	"irie"
			"replacement"	"i-rey"
			"replacement_plural"	"hard dem"
			"replacement_plural"	"irie dem"
			"replacement_plural"	"i-rey dem"
		}

		"1"
		{
			"word"	"exist"
			"word_plural"	"exists"
			"replacement"	"dey"
			"replacement_plural"	"dey dem"
		}

		"1"
		{
			"prev"	"extra-sensory"
			"word"	"knowledge"
			"replacement"	"obeah"
		}

		"1"
		{
			"word"	"eye"
			"replacement"	"yai"
		}

		"1"
		{
			"word"	"fashion"
			"word_plural"	"fashions"
			"replacement"	"pattan"
			"replacement_plural"	"pattan dem"
		}

		"1"
		{
			"word"	"fat"
			"replacement"	"mampi"
			"replacement"	"bufu-bufu"
			"replacement"	"slabba-slabba"
		}

		"1"
		{
			"word"	"father"
			"word_plural"	"fathers"
			"replacement"	"dada"
			"replacement"	"tata"
			"replacement_plural"	"dada dem"
			"replacement_plural"	"tata dem"
		}

		"1"
		{
			"word"	"favour"
			"word_plural"	"favours"
			"replacement"	"fayva"
			"replacement_plural"	"fayva dem"
		}

		"1"
		{
			"word"	"fawning"
			"word_plural"	"fawnings"
			"replacement"	"licky-licky"
			"replacement_plural"	"licky-licky dem"
		}

		"1"
		{
			"word"	"fearless"
			"replacement"	"tallowah"
		}

		"1"
		{
			"word"	"feeble"
			"word_plural"	"feebles"
			"replacement"	"pyaa-pyaa"
			"replacement_plural"	"pyaa-pyaa dem"
		}

		"1"
		{
			"prev"	"female"
			"word"	"genatalia"
			"replacement"	"nash"
		}

		"1"
		{
			"prev"	"female"
			"word"	"organ"
			"replacement"	"tunti"
		}

		"1"
		{
			"word"	"filled"
			"word_plural"	"filleds"
			"replacement"	"cork up"
			"replacement_plural"	"cork up dem"
		}

		"1"
		{
			"word"	"finicky"
			"word_plural"	"finickies"
			"replacement"	"picky-picky"
			"replacement_plural"	"picky-picky dem"
		}

		"1"
		{
			"prev"	"flail"
			"word"	"made"
			"replacement"	"tambran switch"
		}

		"1"
		{
			"word"	"flattering"
			"word_plural"	"flatterings"
			"replacement"	"licky-licky"
			"replacement_plural"	"licky-licky dem"
		}

		"1"
		{
			"prev"	"flour"
			"word"	"cookie"
			"replacement"	"bulla"
		}

		"1"
		{
			"prev"	"flying"
			"word"	"rodent"
			"replacement"	"bat"
		}

		"1"
		{
			"word"	"food"
			"word_plural"	"foods"
			"replacement"	"salt"
			"replacement_plural"	"salt dem"
		}

		"1"
		{
			"word"	"fool"
			"word_plural"	"fools"
			"replacement"	"bobo"
			"replacement"	"bubu"
			"replacement_plural"	"bobo dem"
			"replacement_plural"	"bubu dem"
		}

		"1"
		{
			"prev"	"fool"
			"word"	"someone"
			"replacement"	"card"
		}

		"1"
		{
			"prev"	"foolish"
			"word"	"person"
			"replacement"	"mumu"
		}

		"1"
		{
			"word"	"force"
			"word_plural"	"forces"
			"replacement"	"rhygin"
			"replacement_plural"	"rhygin dem"
		}

		"1"
		{
			"word"	"forgive"
			"word_plural"	"forgives"
			"replacement"	"ease-up"
			"replacement_plural"	"ease-up dem"
		}

		"1"
		{
			"word"	"foul-smelling"
			"replacement"	"renk"
		}

		"1"
		{
			"word"	"fracas"
			"replacement"	"cuss-cuss"
		}

		"1"
		{
			"word"	"friend"
			"word_plural"	"friends"
			"replacement"	"star"
			"replacement"	"idren"
			"replacement"	"sister"
			"replacement"	"bredren"
			"replacement"	"sistren"
			"replacement_plural"	"star dem"
			"replacement_plural"	"idren dem"
			"replacement_plural"	"sister dem"
			"replacement_plural"	"bredren dem"
			"replacement_plural"	"sistren dem"
		}

		"1"
		{
			"word"	"friends"
			"replacement"	"idren dem"
			"replacement"	"bredren dem"
			"replacement"	"sistren dem"
		}

		"1"
		{
			"word"	"fugitive"
			"word_plural"	"fugitives"
			"replacement"	"hot-stepper"
			"replacement_plural"	"hot-stepper dem"
		}

		"1"
		{
			"prev"	"full"
			"word"	"grown"
			"replacement"	"fit"
		}

		"1"
		{
			"word"	"gab"
			"replacement"	"laba-laba"
		}

		"1"
		{
			"word"	"ganja"
			"word_plural"	"ganjas"
			"replacement"	"collie"
			"replacement_plural"	"collie dem"
		}

		"1"
		{
			"prev"	"gay"
			"word"	"person"
			"replacement"	"maama man"
		}

		"1"
		{
			"prev"	"get"
			"word"	"angry"
			"replacement"	"vex"
		}

		"1"
		{
			"prev"	"get"
			"word"	"ready"
			"replacement"	"come dung"
		}

		"1"
		{
			"word"	"ghetto"
			"word_plural"	"ghettos"
			"replacement"	"gully"
			"replacement_plural"	"gully dem"
		}

		"1"
		{
			"word"	"ghost"
			"word_plural"	"ghosts"
			"replacement"	"duppy"
			"replacement_plural"	"duppy dem"
		}

		"1"
		{
			"word"	"girl"
			"word_plural"	"girls"
			"replacement"	"dawta"
			"replacement_plural"	"dawta dem"
		}

		"1"
		{
			"word"	"girlfriend"
			"word_plural"	"girlfriends"
			"replacement"	"dawta"
			"replacement_plural"	"dawta dem"
		}

		"1"
		{
			"word"	"give"
			"word_plural"	"gives"
			"replacement"	"gi"
			"replacement_plural"	"gi dem"
		}

		"1"
		{
			"prev"	"give"
			"word"	"thanks"
			"replacement"	"sata"
		}

		"1"
		{
			"prev"	"go"
			"word"	"along"
			"replacement"	"galang"
		}

		"1"
		{
			"word"	"god"
			"replacement"	"jah"
		}

		"1"
		{
			"word"	"gold"
			"word_plural"	"golds"
			"replacement"	"i-tal"
			"replacement_plural"	"i-tal dem"
		}

		"1"
		{
			"word"	"good"
			"word_plural"	"goods"
			"replacement"	"bad"
			"replacement_plural"	"bad dem"
		}

		"1"
		{
			"word"	"gossip"
			"word_plural"	"gossips"
			"replacement"	"su-su"
			"replacement"	"labrish"
			"replacement"	"laba-laba"
			"replacement"	"passa passa"
			"replacement_plural"	"su-su dem"
			"replacement_plural"	"labrish dem"
			"replacement_plural"	"laba-laba dem"
			"replacement_plural"	"passa passa dem"
		}

		"1"
		{
			"word"	"gourd"
			"word_plural"	"gourds"
			"replacement"	"paki"
			"replacement_plural"	"paki dem"
		}

		"1"
		{
			"word"	"great"
			"word_plural"	"greats"
			"replacement"	"bad"
			"replacement"	"crucial"
			"replacement"	"slap weh"
			"replacement_plural"	"bad dem"
			"replacement_plural"	"crucial dem"
			"replacement_plural"	"slap weh dem"
		}

		"1"
		{
			"word"	"greedy"
			"word_plural"	"greedies"
			"replacement"	"craven"
			"replacement"	"gravalicious"
			"replacement"	"harbour shark"
			"replacement_plural"	"craven dem"
			"replacement_plural"	"gravalicious dem"
			"replacement_plural"	"harbour shark dem"
		}

		"1"
		{
			"word"	"green"
			"word_plural"	"greens"
			"replacement"	"i-tal"
			"replacement_plural"	"i-tal dem"
		}

		"1"
		{
			"word"	"greeting"
			"word_plural"	"greetings"
			"replacement"	"hail"
			"replacement"	"irie"
			"replacement"	"i-ney"
			"replacement"	"i-rey"
			"replacement_plural"	"hail dem"
			"replacement_plural"	"irie dem"
			"replacement_plural"	"i-ney dem"
			"replacement_plural"	"i-rey dem"
		}

		"1"
		{
			"word"	"grieving"
			"word_plural"	"grievings"
			"replacement"	"hush"
			"replacement_plural"	"hush dem"
		}

		"1"
		{
			"prev"	"ground"
			"word"	"corn"
			"replacement"	"asham"
		}

		"1"
		{
			"word"	"guernsey"
			"word_plural"	"guernseys"
			"replacement"	"marina"
			"replacement_plural"	"marina dem"
		}

		"1"
		{
			"word"	"hackling"
			"word_plural"	"hacklings"
			"replacement"	"hackle"
			"replacement_plural"	"hackle dem"
		}

		"1"
		{
			"prev"	"haille"
			"word"	"selassie"
			"replacement"	"jah"
		}

		"1"
		{
			"word"	"hangout"
			"word_plural"	"hangouts"
			"replacement"	"jooks"
			"replacement_plural"	"jooks dem"
		}

		"1"
		{
			"word"	"hard"
			"word_plural"	"hards"
			"replacement"	"crucial"
			"replacement_plural"	"crucial dem"
		}

		"1"
		{
			"word"	"hassle"
			"word_plural"	"hassles"
			"replacement"	"hackle"
			"replacement_plural"	"hackle dem"
		}

		"1"
		{
			"word"	"head"
			"word_plural"	"heads"
			"replacement"	"ras"
			"replacement_plural"	"ras dem"
		}

		"1"
		{
			"word"	"healer"
			"word_plural"	"healers"
			"replacement"	"shepherd"
			"replacement_plural"	"shepherd dem"
		}

		"1"
		{
			"word"	"health"
			"word_plural"	"healths"
			"replacement"	"structure"
			"replacement_plural"	"structure dem"
		}

		"1"
		{
			"word"	"hear"
			"word_plural"	"hears"
			"replacement"	"ya"
			"replacement_plural"	"ya dem"
		}

		"1"
		{
			"prev"	"heathen"
			"word"	"craven"
			"replacement"	"payaka"
		}

		"1"
		{
			"word"	"heavy"
			"word_plural"	"heavies"
			"replacement"	"gorgon"
			"replacement"	"big man"
			"replacement_plural"	"gorgon dem"
			"replacement_plural"	"big man dem"
		}

		"1"
		{
			"word"	"heights"
			"replacement"	"ites"
		}

		"1"
		{
			"word"	"hello"
			"word_plural"	"hellos"
			"replacement"	"hail"
			"replacement"	"irie"
			"replacement"	"wah gwan"
			"replacement_plural"	"hail dem"
			"replacement_plural"	"irie dem"
			"replacement_plural"	"wah gwan dem"
		}

		"1"
		{
			"prev"	"hence"
			"word"	"myalman"
			"replacement"	"myal"
		}

		"1"
		{
			"word"	"herb"
			"word_plural"	"herbs"
			"replacement"	"ganja"
			"replacement"	"i-shence"
			"replacement_plural"	"ganja dem"
			"replacement_plural"	"i-shence dem"
		}

		"1"
		{
			"word"	"higglers"
			"replacement"	"higglers"
		}

		"1"
		{
			"prev"	"high"
			"word"	"tone"
			"replacement"	"hitey-titey"
		}

		"1"
		{
			"word"	"highest"
			"word_plural"	"highests"
			"replacement"	"irie"
			"replacement"	"i-rey"
			"replacement_plural"	"irie dem"
			"replacement_plural"	"i-rey dem"
		}

		"1"
		{
			"word"	"highly"
			"word_plural"	"highlies"
			"replacement"	"ilie"
			"replacement_plural"	"ilie dem"
		}

		"1"
		{
			"prev"	"highly"
			"word"	"respected"
			"replacement"	"ranking"
		}

		"1"
		{
			"word"	"hit"
			"replacement"	"clap"
			"replacement"	"lick"
		}

		"1"
		{
			"word"	"home"
			"word_plural"	"homes"
			"replacement"	"yard"
			"replacement"	"gates"
			"replacement"	"ground"
			"replacement_plural"	"yard dem"
			"replacement_plural"	"gates dem"
			"replacement_plural"	"ground dem"
		}

		"1"
		{
			"prev"	"home-cured"
			"word"	"tobacco"
			"replacement"	"shag"
		}

		"1"
		{
			"prev"	"homegrown"
			"word"	"tobacco"
			"replacement"	"jackass rope"
		}

		"1"
		{
			"word"	"hooligan"
			"word_plural"	"hooligans"
			"replacement"	"blackheart man"
			"replacement_plural"	"blackheart man dem"
		}

		"1"
		{
			"prev"	"hooligan"
			"word"	"behavior"
			"replacement"	"badness"
		}

		"1"
		{
			"word"	"hour"
			"word_plural"	"hours"
			"replacement"	"iwa"
			"replacement"	"i-wah"
			"replacement_plural"	"iwa dem"
			"replacement_plural"	"i-wah dem"
		}

		"1"
		{
			"word"	"however"
			"word_plural"	"howevers"
			"replacement"	"higglers"
			"replacement_plural"	"higglers dem"
		}

		"1"
		{
			"word"	"hubbub"
			"word_plural"	"hubbubs"
			"replacement"	"bangarang"
			"replacement_plural"	"bangarang dem"
		}

		"1"
		{
			"prev"	"huge"
			"word"	"success"
			"replacement"	"mash it up"
		}

		"1"
		{
			"word"	"humiliate"
			"word_plural"	"humiliates"
			"replacement"	"cold i up"
			"replacement_plural"	"cold i up dem"
		}

		"1"
		{
			"word"	"humorous"
			"replacement"	"royal"
		}

		"1"
		{
			"word"	"hungry-belly"
			"replacement"	"wanga-gut"
		}

		"1"
		{
			"prev"	"i"
			"word"	"agree"
			"replacement"	"seen"
		}

		"1"
		{
			"prev"	"i"
			"word"	"understand"
			"replacement"	"seen"
		}

		"1"
		{
			"prev"	"immature"
			"word"	"man"
			"replacement"	"youth"
		}

		"1"
		{
			"word"	"impertinent"
			"word_plural"	"impertinents"
			"replacement"	"faasti"
			"replacement_plural"	"faasti dem"
		}

		"1"
		{
			"word"	"impotent"
			"word_plural"	"impotents"
			"replacement"	"dead hood"
			"replacement_plural"	"dead hood dem"
		}

		"1"
		{
			"word"	"impudent"
			"word_plural"	"impudents"
			"replacement"	"faasti"
			"replacement"	"fiesty"
			"replacement_plural"	"faasti dem"
			"replacement_plural"	"fiesty dem"
		}

		"1"
		{
			"word"	"irate"
			"word_plural"	"irates"
			"replacement"	"ignorant"
			"replacement_plural"	"ignorant dem"
		}

		"1"
		{
			"prev"	"island-wide"
			"word"	"meeting"
			"replacement"	"grounation"
		}

		"1"
		{
			"word"	"itch"
			"word_plural"	"itches"
			"replacement"	"heetch"
			"replacement_plural"	"heetch dem"
		}

		"1"
		{
			"word"	"jammed"
			"word_plural"	"jammeds"
			"replacement"	"cork up"
			"replacement_plural"	"cork up dem"
		}

		"1"
		{
			"prev"	"juu"
			"word"	"rain"
			"replacement"	"juu"
		}

		"1"
		{
			"word"	"kid"
			"replacement"	"pikny"
			"replacement"	"pickney"
		}

		"1"
		{
			"word"	"kiln"
			"word_plural"	"kilns"
			"replacement"	"skil"
			"replacement_plural"	"skil dem"
		}

		"1"
		{
			"word"	"knock"
			"word_plural"	"knocks"
			"replacement"	"bunks"
			"replacement_plural"	"bunks dem"
		}

		"1"
		{
			"word"	"language"
			"word_plural"	"languages"
			"replacement"	"nago"
			"replacement_plural"	"nago dem"
		}

		"1"
		{
			"word"	"large"
			"word_plural"	"larges"
			"replacement"	"spliff"
			"replacement"	"grounation"
			"replacement"	"big bout yah"
			"replacement_plural"	"spliff dem"
			"replacement_plural"	"grounation dem"
			"replacement_plural"	"big bout yah dem"
		}

		"1"
		{
			"prev"	"latest"
			"word"	"sound"
			"replacement"	"rockers"
		}

		"1"
		{
			"word"	"leave"
			"word_plural"	"leaves"
			"replacement"	"step"
			"replacement_plural"	"step dem"
		}

		"1"
		{
			"prev"	"let"
			"word"	"us"
			"replacement"	"mek we"
		}

		"1"
		{
			"word"	"lewd"
			"word_plural"	"lewds"
			"replacement"	"slackness"
			"replacement_plural"	"slackness dem"
		}

		"1"
		{
			"word"	"liana"
			"word_plural"	"lianas"
			"replacement"	"wis"
			"replacement_plural"	"wis dem"
		}

		"1"
		{
			"word"	"lifted"
			"word_plural"	"lifteds"
			"replacement"	"balmyard"
			"replacement_plural"	"balmyard dem"
		}

		"1"
		{
			"prev"	"like"
			"word"	"burlap"
			"replacement"	"crocus bag"
		}

		"1"
		{
			"word"	"literally"
			"word_plural"	"literallies"
			"replacement"	"nuh"
			"replacement"	"ilie"
			"replacement_plural"	"nuh dem"
			"replacement_plural"	"ilie dem"
		}

		"1"
		{
			"word"	"little"
			"word_plural"	"littles"
			"replacement"	"dege"
			"replacement"	"beenie"
			"replacement"	"likkle"
			"replacement_plural"	"dege dem"
			"replacement_plural"	"beenie dem"
			"replacement_plural"	"likkle dem"
		}

		"1"
		{
			"prev"	"little"
			"word"	"bit"
			"replacement"	"kemps"
			"replacement"	"lilly bit"
		}

		"1"
		{
			"prev"	"little"
			"word"	"extra"
			"replacement"	"braata"
		}

		"1"
		{
			"word"	"lively"
			"word_plural"	"livelies"
			"replacement"	"rhygin"
			"replacement_plural"	"rhygin dem"
		}

		"1"
		{
			"word"	"long"
			"word_plural"	"longs"
			"replacement"	"tall"
			"replacement_plural"	"tall dem"
		}

		"1"
		{
			"word"	"look"
			"word_plural"	"looks"
			"replacement"	"cu"
			"replacement"	"coo"
			"replacement"	"pree"
			"replacement_plural"	"cu dem"
			"replacement_plural"	"coo dem"
			"replacement_plural"	"pree dem"
		}

		"1"
		{
			"prev"	"look"
			"word"	"like"
			"replacement"	"fayva"
		}

		"1"
		{
			"prev"	"look"
			"word"	"upon"
			"replacement"	"coo"
		}

		"1"
		{
			"prev"	"lord"
			"word"	"knows"
			"replacement"	"jah know"
		}

		"1"
		{
			"word"	"loser"
			"word_plural"	"losers"
			"replacement"	"saps"
			"replacement_plural"	"saps dem"
		}

		"1"
		{
			"word"	"lot"
			"replacement"	"whole heap"
		}

		"1"
		{
			"word"	"loving"
			"word_plural"	"lovings"
			"replacement"	"gaan a bed"
			"replacement_plural"	"gaan a bed dem"
		}

		"1"
		{
			"word"	"lumbering"
			"word_plural"	"lumberings"
			"replacement"	"bufu-bufu"
			"replacement_plural"	"bufu-bufu dem"
		}

		"1"
		{
			"word"	"marijuana"
			"word_plural"	"marijuanas"
			"replacement"	"corn"
			"replacement"	"herb"
			"replacement"	"ganja"
			"replacement_plural"	"corn dem"
			"replacement_plural"	"herb dem"
			"replacement_plural"	"ganja dem"
		}

		"1"
		{
			"word"	"measly"
			"word_plural"	"measlies"
			"replacement"	"dege"
			"replacement_plural"	"dege dem"
		}

		"1"
		{
			"word"	"meat"
			"word_plural"	"meats"
			"replacement"	"deaders"
			"replacement_plural"	"deaders dem"
		}

		"1"
		{
			"prev"	"meat"
			"word"	"by-products"
			"replacement"	"deaders"
		}

		"1"
		{
			"word"	"medic"
			"word_plural"	"medics"
			"replacement"	"doc"
			"replacement"	"healer"
			"replacement"	"apothecary"
			"replacement"	"witchdoctor"
			"replacement_plural"	"doc dem"
			"replacement_plural"	"healer dem"
			"replacement_plural"	"apothecary dem"
			"replacement_plural"	"witchdoctor dem"
		}

		"1"
		{
			"word"	"meditate"
			"word_plural"	"meditates"
			"replacement"	"sata"
			"replacement_plural"	"sata dem"
		}

		"1"
		{
			"prev"	"meditate"
			"word"	"relax"
			"replacement"	"satta"
		}

		"1"
		{
			"word"	"meet"
			"word_plural"	"meets"
			"replacement"	"buck up"
			"replacement_plural"	"buck up dem"
		}

		"1"
		{
			"prev"	"mek"
			"word"	"why"
			"replacement"	"wa"
		}

		"1"
		{
			"word"	"messy"
			"word_plural"	"messies"
			"replacement"	"chaka-chaka"
			"replacement"	"slacky tidy"
			"replacement_plural"	"chaka-chaka dem"
			"replacement_plural"	"slacky tidy dem"
		}

		"1"
		{
			"word"	"midwife"
			"word_plural"	"midwifes"
			"replacement"	"nana"
			"replacement_plural"	"nana dem"
		}

		"1"
		{
			"word"	"mine"
			"replacement"	"i-man"
		}

		"1"
		{
			"word"	"misfortunes"
			"replacement"	"crosses"
		}

		"1"
		{
			"word"	"mistress"
			"replacement"	"matey"
		}

		"1"
		{
			"word"	"money"
			"word_plural"	"moneys"
			"replacement"	"coil"
			"replacement"	"corn"
			"replacement"	"duns"
			"replacement"	"dunsa"
			"replacement"	"funds"
			"replacement"	"sanfi"
			"replacement_plural"	"coil dem"
			"replacement_plural"	"corn dem"
			"replacement_plural"	"duns dem"
			"replacement_plural"	"dunsa dem"
			"replacement_plural"	"funds dem"
			"replacement_plural"	"sanfi dem"
		}

		"1"
		{
			"word"	"mongrel"
			"word_plural"	"mongrels"
			"replacement"	"maga dog"
			"replacement_plural"	"maga dog dem"
		}

		"1"
		{
			"word"	"moth"
			"word_plural"	"moths"
			"replacement"	"bat"
			"replacement_plural"	"bat dem"
		}

		"1"
		{
			"word"	"mother"
			"word_plural"	"mothers"
			"replacement"	"madda"
			"replacement_plural"	"madda dem"
		}

		"1"
		{
			"prev"	"mulatto"
			"word"	"color"
			"replacement"	"red"
		}

		"1"
		{
			"prev"	"muscial"
			"word"	"rehearsal"
			"replacement"	"string up"
		}

		"1"
		{
			"prev"	"n"
			"word"	"gombe"
			"replacement"	"tata"
		}

		"1"
		{
			"word"	"nanny"
			"word_plural"	"nannies"
			"replacement"	"nana"
			"replacement_plural"	"nana dem"
		}

		"1"
		{
			"word"	"natural"
			"word_plural"	"naturals"
			"replacement"	"i-tal"
			"replacement_plural"	"i-tal dem"
		}

		"1"
		{
			"prev"	"night-flying"
			"word"	"rodent"
			"replacement"	"rat-bat"
		}

		"1"
		{
			"prev"	"nine"
			"word"	"nights"
			"replacement"	"dinki"
		}

		"1"
		{
			"prev"	"no"
			"word"	"matter"
			"replacement"	"no cya"
		}

		"1"
		{
			"prev"	"non-rasta"
			"word"	"deadlocks"
			"replacement"	"wolf"
		}

		"1"
		{
			"prev"	"north"
			"word"	"america"
			"replacement"	"higglers"
		}

		"1"
		{
			"prev"	"now"
			"word"	"cleared"
			"replacement"	"dungle"
		}

		"1"
		{
			"word"	"nurse"
			"word_plural"	"nurses"
			"replacement"	"nana"
			"replacement_plural"	"nana dem"
		}

		"1"
		{
			"word"	"obeah"
			"word_plural"	"obeahs"
			"replacement"	"science"
			"replacement_plural"	"science dem"
		}

		"1"
		{
			"word"	"obsequious"
			"replacement"	"licky-licky"
		}

		"1"
		{
			"prev"	"occult"
			"word"	"practitioner"
			"replacement"	"scientist"
		}

		"1"
		{
			"word"	"omens"
			"replacement"	"obeah"
		}

		"1"
		{
			"word"	"only"
			"word_plural"	"onlies"
			"replacement"	"dege"
			"replacement"	"ongle"
			"replacement"	"so-so"
			"replacement_plural"	"dege dem"
			"replacement_plural"	"ongle dem"
			"replacement_plural"	"so-so dem"
		}

		"1"
		{
			"word"	"organic"
			"word_plural"	"organics"
			"replacement"	"i-tal"
			"replacement_plural"	"i-tal dem"
		}

		"1"
		{
			"word"	"ostentatious"
			"replacement"	"boasie"
		}

		"1"
		{
			"prev"	"other"
			"word"	"day"
			"replacement"	"wa day"
		}

		"1"
		{
			"word"	"outdoors"
			"replacement"	"a door"
		}

		"1"
		{
			"word"	"overweight"
			"word_plural"	"overweights"
			"replacement"	"mampi"
			"replacement_plural"	"mampi dem"
		}

		"1"
		{
			"word"	"owl"
			"replacement"	"patu"
		}

		"1"
		{
			"word"	"own"
			"replacement"	"control"
		}

		"1"
		{
			"word"	"pain"
			"word_plural"	"pains"
			"replacement"	"fenneh"
			"replacement_plural"	"fenneh dem"
		}

		"1"
		{
			"word"	"pallid"
			"word_plural"	"pallids"
			"replacement"	"so-so"
			"replacement_plural"	"so-so dem"
		}

		"1"
		{
			"prev"	"papaya"
			"word"	"melon"
			"replacement"	"papaa"
		}

		"1"
		{
			"word"	"parched"
			"word_plural"	"parcheds"
			"replacement"	"asham"
			"replacement_plural"	"asham dem"
		}

		"1"
		{
			"prev"	"parting"
			"word"	"phrase"
			"replacement"	"one love"
		}

		"1"
		{
			"word"	"party"
			"word_plural"	"parties"
			"replacement"	"bashment"
			"replacement_plural"	"bashment dem"
		}

		"1"
		{
			"word"	"pattern"
			"word_plural"	"patterns"
			"replacement"	"pattan"
			"replacement_plural"	"pattan dem"
		}

		"1"
		{
			"word"	"pawpaw"
			"word_plural"	"pawpaws"
			"replacement"	"papaa"
			"replacement_plural"	"papaa dem"
		}

		"1"
		{
			"word"	"peanut"
			"word_plural"	"peanuts"
			"replacement"	"pinda"
			"replacement_plural"	"pinda dem"
		}

		"1"
		{
			"word"	"peasant"
			"word_plural"	"peasants"
			"replacement"	"quashie"
			"replacement_plural"	"quashie dem"
		}

		"1"
		{
			"word"	"penis"
			"replacement"	"hood"
			"replacement"	"wood"
		}

		"1"
		{
			"prev"	"physically"
			"word"	"capable"
			"replacement"	"tallowah"
		}

		"1"
		{
			"word"	"pickaninny"
			"word_plural"	"pickaninnies"
			"replacement"	"pikny"
			"replacement_plural"	"pikny dem"
		}

		"1"
		{
			"word"	"pierce"
			"word_plural"	"pierces"
			"replacement"	"jook"
			"replacement_plural"	"jook dem"
		}

		"1"
		{
			"word"	"police"
			"word_plural"	"polices"
			"replacement"	"beast"
			"replacement"	"babylon"
			"replacement_plural"	"beast dem"
			"replacement_plural"	"babylon dem"
		}

		"1"
		{
			"word"	"policeman"
			"word_plural"	"policemans"
			"replacement"	"beast"
			"replacement"	"babylon"
			"replacement_plural"	"beast dem"
			"replacement_plural"	"babylon dem"
		}

		"1"
		{
			"word"	"politicians"
			"replacement"	"polytricksters"
		}

		"1"
		{
			"word"	"politics"
			"replacement"	"polytricks"
		}

		"1"
		{
			"prev"	"pon"
			"word"	"v"
			"replacement"	"coo"
		}

		"1"
		{
			"word"	"poorhouse"
			"word_plural"	"poorhouses"
			"replacement"	"amshouse"
			"replacement_plural"	"amshouse dem"
		}

		"1"
		{
			"word"	"positive"
			"word_plural"	"positives"
			"replacement"	"uphill"
			"replacement_plural"	"uphill dem"
		}

		"1"
		{
			"word"	"possessive"
			"word_plural"	"possessives"
			"replacement"	"fi"
			"replacement_plural"	"fi dem"
		}

		"1"
		{
			"word"	"postitive"
			"word_plural"	"postitives"
			"replacement"	"upful"
			"replacement_plural"	"upful dem"
		}

		"1"
		{
			"word"	"potent"
			"word_plural"	"potents"
			"replacement"	"sensie"
			"replacement"	"sinsemilla"
			"replacement_plural"	"sensie dem"
			"replacement_plural"	"sinsemilla dem"
		}

		"1"
		{
			"word"	"practice"
			"word_plural"	"practices"
			"replacement"	"nago"
			"replacement_plural"	"nago dem"
		}

		"1"
		{
			"word"	"praise"
			"word_plural"	"praises"
			"replacement"	"sata"
			"replacement_plural"	"sata dem"
		}

		"1"
		{
			"word"	"prickle"
			"word_plural"	"prickles"
			"replacement"	"macca"
			"replacement_plural"	"macca dem"
		}

		"1"
		{
			"word"	"problems"
			"replacement"	"crosses"
		}

		"1"
		{
			"word"	"proficient"
			"word_plural"	"proficients"
			"replacement"	"hard"
			"replacement_plural"	"hard dem"
		}

		"1"
		{
			"word"	"promote"
			"word_plural"	"promotes"
			"replacement"	"nice up"
			"replacement_plural"	"nice up dem"
		}

		"1"
		{
			"word"	"prophet"
			"word_plural"	"prophets"
			"replacement"	"shepherd"
			"replacement_plural"	"shepherd dem"
		}

		"1"
		{
			"word"	"proud"
			"word_plural"	"prouds"
			"replacement"	"boasie"
			"replacement"	"fenky-fenky"
			"replacement_plural"	"boasie dem"
			"replacement_plural"	"fenky-fenky dem"
		}

		"1"
		{
			"word"	"punishment"
			"word_plural"	"punishments"
			"replacement"	"manners"
			"replacement_plural"	"manners dem"
		}

		"1"
		{
			"word"	"pyro"
			"word_plural"	"pyros"
			"replacement"	"fireman"
			"replacement"	"firebrand"
			"replacement"	"pyromaniac"
			"replacement_plural"	"fireman dem"
			"replacement_plural"	"firebrand dem"
			"replacement_plural"	"pyromaniac dem"
		}

		"1"
		{
			"word"	"quarrel"
			"word_plural"	"quarrels"
			"replacement"	"cuss-cuss"
			"replacement"	"kass kass"
			"replacement_plural"	"cuss-cuss dem"
			"replacement_plural"	"kass kass dem"
		}

		"1"
		{
			"word"	"quickly"
			"word_plural"	"quicklies"
			"replacement"	"step"
			"replacement_plural"	"step dem"
		}

		"1"
		{
			"word"	"rascal"
			"word_plural"	"rascals"
			"replacement"	"blackheart man"
			"replacement_plural"	"blackheart man dem"
		}

		"1"
		{
			"prev"	"rass"
			"word"	"backside"
			"replacement"	"ras"
		}

		"1"
		{
			"prev"	"rass"
			"word"	"clot"
			"replacement"	"clot"
		}

		"1"
		{
			"word"	"rat"
			"replacement"	"mus mus"
		}

		"1"
		{
			"word"	"raw-smelling"
			"replacement"	"renk"
		}

		"1"
		{
			"word"	"red"
			"replacement"	"i-tal"
		}

		"1"
		{
			"word"	"reflecting"
			"word_plural"	"reflectings"
			"replacement"	"culture"
			"replacement_plural"	"culture dem"
		}

		"1"
		{
			"word"	"rejoice"
			"word_plural"	"rejoices"
			"replacement"	"sata"
			"replacement_plural"	"sata dem"
		}

		"1"
		{
			"word"	"relax"
			"word_plural"	"relaxes"
			"replacement"	"cease"
			"replacement"	"jooks"
			"replacement_plural"	"cease dem"
			"replacement_plural"	"jooks dem"
		}

		"1"
		{
			"word"	"resemble"
			"word_plural"	"resembles"
			"replacement"	"fayva"
			"replacement"	"come een like"
			"replacement_plural"	"fayva dem"
			"replacement_plural"	"come een like dem"
		}

		"1"
		{
			"word"	"respected"
			"word_plural"	"respecteds"
			"replacement"	"large"
			"replacement"	"massive"
			"replacement"	"hortical"
			"replacement_plural"	"large dem"
			"replacement_plural"	"massive dem"
			"replacement_plural"	"hortical dem"
		}

		"1"
		{
			"word"	"rest"
			"word_plural"	"rests"
			"replacement"	"satta"
			"replacement_plural"	"satta dem"
		}

		"1"
		{
			"word"	"righteous"
			"replacement"	"uphill"
		}

		"1"
		{
			"prev"	"rolling"
			"word"	"paper"
			"replacement"	"skin"
			"replacement"	"bambu"
		}

		"1"
		{
			"word"	"royal"
			"word_plural"	"royals"
			"replacement"	"ryal"
			"replacement_plural"	"ryal dem"
		}

		"1"
		{
			"word"	"rub-a-dub"
			"replacement"	"rub-a-dub"
		}

		"1"
		{
			"word"	"rude"
			"word_plural"	"rudes"
			"replacement"	"faasti"
			"replacement"	"fiesty"
			"replacement_plural"	"faasti dem"
			"replacement_plural"	"fiesty dem"
		}

		"1"
		{
			"word"	"ruined"
			"word_plural"	"ruineds"
			"replacement"	"sheg-up"
			"replacement_plural"	"sheg-up dem"
		}

		"1"
		{
			"word"	"rump"
			"word_plural"	"rumps"
			"replacement"	"ras"
			"replacement_plural"	"ras dem"
		}

		"1"
		{
			"word"	"saying"
			"word_plural"	"sayings"
			"replacement"	"creation stepper"
			"replacement_plural"	"creation stepper dem"
		}

		"1"
		{
			"prev"	"scaly"
			"word"	"appearance"
			"replacement"	"cocobay"
		}

		"1"
		{
			"word"	"scout"
			"word_plural"	"scouts"
			"replacement"	"runner"
			"replacement"	"rude bwoy"
			"replacement"	"leggo beas"
			"replacement_plural"	"runner dem"
			"replacement_plural"	"rude bwoy dem"
			"replacement_plural"	"leggo beas dem"
		}

		"1"
		{
			"word"	"scowl"
			"word_plural"	"scowls"
			"replacement"	"screw"
			"replacement_plural"	"screw dem"
		}

		"1"
		{
			"prev"	"see"
			"word"	"ganja"
			"replacement"	"kaya"
		}

		"1"
		{
			"word"	"seedless"
			"replacement"	"sensie"
			"replacement"	"sinsemilla"
		}

		"1"
		{
			"word"	"serious"
			"replacement"	"crucial"
		}

		"1"
		{
			"word"	"session"
			"word_plural"	"sessions"
			"replacement"	"bashment"
			"replacement_plural"	"bashment dem"
		}

		"1"
		{
			"prev"	"shoddy"
			"word"	"job"
			"replacement"	"kaba-kaba"
		}

		"1"
		{
			"word"	"short-tempered"
			"replacement"	"ignorant"
		}

		"1"
		{
			"word"	"shove"
			"word_plural"	"shoves"
			"replacement"	"shoob"
			"replacement_plural"	"shoob dem"
		}

		"1"
		{
			"word"	"shrimp"
			"word_plural"	"shrimps"
			"replacement"	"janga"
			"replacement_plural"	"janga dem"
		}

		"1"
		{
			"word"	"sickly"
			"word_plural"	"sicklies"
			"replacement"	"pyaa-pyaa"
			"replacement_plural"	"pyaa-pyaa dem"
		}

		"1"
		{
			"prev"	"sickly"
			"word"	"looking"
			"replacement"	"winjy"
		}

		"1"
		{
			"word"	"sister"
			"word_plural"	"sisters"
			"replacement"	"dawta"
			"replacement_plural"	"dawta dem"
		}

		"1"
		{
			"word"	"sit"
			"replacement"	"satta"
		}

		"1"
		{
			"word"	"skillful"
			"word_plural"	"skillfuls"
			"replacement"	"hard"
			"replacement_plural"	"hard dem"
		}

		"1"
		{
			"word"	"skimpy"
			"word_plural"	"skimpies"
			"replacement"	"dege"
			"replacement_plural"	"dege dem"
		}

		"1"
		{
			"word"	"slick-looking"
			"replacement"	"cris"
		}

		"1"
		{
			"word"	"slimy"
			"word_plural"	"slimies"
			"replacement"	"sipple"
			"replacement_plural"	"sipple dem"
		}

		"1"
		{
			"word"	"slippery"
			"word_plural"	"slipperies"
			"replacement"	"sipple"
			"replacement_plural"	"sipple dem"
		}

		"1"
		{
			"word"	"slobby"
			"word_plural"	"slobbies"
			"replacement"	"slabba-slabba"
			"replacement_plural"	"slabba-slabba dem"
		}

		"1"
		{
			"word"	"sloppy"
			"word_plural"	"sloppies"
			"replacement"	"buguyaga"
			"replacement_plural"	"buguyaga dem"
		}

		"1"
		{
			"word"	"slum"
			"word_plural"	"slums"
			"replacement"	"gully"
			"replacement_plural"	"gully dem"
		}

		"1"
		{
			"word"	"smack"
			"word_plural"	"smacks"
			"replacement"	"box"
			"replacement_plural"	"box dem"
		}

		"1"
		{
			"prev"	"smoke"
			"word"	"weed"
			"replacement"	"black up"
		}

		"1"
		{
			"word"	"sniper"
			"word_plural"	"snipers"
			"replacement"	"hunter"
			"replacement"	"bushman"
			"replacement"	"marksman"
			"replacement_plural"	"hunter dem"
			"replacement_plural"	"bushman dem"
			"replacement_plural"	"marksman dem"
		}

		"1"
		{
			"word"	"soldier"
			"word_plural"	"soldiers"
			"replacement"	"general"
			"replacement"	"warrior"
			"replacement_plural"	"general dem"
			"replacement_plural"	"warrior dem"
		}

		"1"
		{
			"word"	"solely"
			"word_plural"	"solelies"
			"replacement"	"so-so"
			"replacement_plural"	"so-so dem"
		}

		"1"
		{
			"prev"	"some"
			"word"	"higglers"
			"replacement"	"higglers"
		}

		"1"
		{
			"word"	"somebody"
			"word_plural"	"somebodies"
			"replacement"	"smadi"
			"replacement_plural"	"smadi dem"
		}

		"1"
		{
			"word"	"somersalt"
			"word_plural"	"somersalts"
			"replacement"	"puppalick"
			"replacement_plural"	"puppalick dem"
		}

		"1"
		{
			"word"	"something"
			"word_plural"	"somethings"
			"replacement"	"supm"
			"replacement"	"sinting"
			"replacement_plural"	"supm dem"
			"replacement_plural"	"sinting dem"
		}

		"1"
		{
			"prev"	"sometimes"
			"word"	"seductively"
			"replacement"	"wine"
		}

		"1"
		{
			"word"	"span"
			"word_plural"	"spans"
			"replacement"	"shampata"
			"replacement_plural"	"shampata dem"
		}

		"1"
		{
			"word"	"spells"
			"replacement"	"obeah"
		}

		"1"
		{
			"prev"	"spells"
			"word"	"cast"
			"replacement"	"balmyard"
		}

		"1"
		{
			"prev"	"spinach"
			"word"	"stew"
			"replacement"	"callalou"
		}

		"1"
		{
			"prev"	"spinning"
			"word"	"top"
			"replacement"	"gig"
		}

		"1"
		{
			"word"	"spirited"
			"word_plural"	"spiriteds"
			"replacement"	"rhygin"
			"replacement_plural"	"rhygin dem"
		}

		"1"
		{
			"word"	"spirits"
			"replacement"	"obeah"
		}

		"1"
		{
			"prev"	"spiritual"
			"word"	"songs"
			"replacement"	"chant"
		}

		"1"
		{
			"prev"	"split"
			"word"	"peas"
			"replacement"	"daal"
		}

		"1"
		{
			"word"	"sprout"
			"word_plural"	"sprouts"
			"replacement"	"spring"
			"replacement_plural"	"spring dem"
		}

		"1"
		{
			"word"	"spy"
			"replacement"	"duppy"
			"replacement"	"ginnal"
			"replacement"	"trickster"
		}

		"1"
		{
			"word"	"state"
			"word_plural"	"states"
			"replacement"	"babylon"
			"replacement_plural"	"babylon dem"
		}

		"1"
		{
			"word"	"steal"
			"word_plural"	"steals"
			"replacement"	"teif"
			"replacement_plural"	"teif dem"
		}

		"1"
		{
			"word"	"stick"
			"word_plural"	"sticks"
			"replacement"	"jook"
			"replacement_plural"	"jook dem"
		}

		"1"
		{
			"word"	"stoosh"
			"word_plural"	"stooshes"
			"replacement"	"hitey-titey"
			"replacement_plural"	"hitey-titey dem"
		}

		"1"
		{
			"word"	"storyteller"
			"word_plural"	"storytellers"
			"replacement"	"banton"
			"replacement_plural"	"banton dem"
		}

		"1"
		{
			"word"	"straight"
			"word_plural"	"straights"
			"replacement"	"shag"
			"replacement_plural"	"shag dem"
		}

		"1"
		{
			"prev"	"straight"
			"word"	"person"
			"replacement"	"bald-head"
		}

		"1"
		{
			"word"	"stride"
			"word_plural"	"strides"
			"replacement"	"clap"
			"replacement_plural"	"clap dem"
		}

		"1"
		{
			"word"	"strong"
			"word_plural"	"strongs"
			"replacement"	"tallowah"
			"replacement_plural"	"tallowah dem"
		}

		"1"
		{
			"word"	"stubborn"
			"word_plural"	"stubborns"
			"replacement"	"iez-haad"
			"replacement"	"hard ears"
			"replacement"	"hiez-haad"
			"replacement_plural"	"iez-haad dem"
			"replacement_plural"	"hard ears dem"
			"replacement_plural"	"hiez-haad dem"
		}

		"1"
		{
			"word"	"stuck-up"
			"replacement"	"fenky-fenky"
		}

		"1"
		{
			"word"	"stupid"
			"word_plural"	"stupids"
			"replacement"	"lagga head"
			"replacement_plural"	"lagga head dem"
		}

		"1"
		{
			"prev"	"stupid"
			"word"	"person"
			"replacement"	"quashie"
		}

		"1"
		{
			"word"	"sturdy"
			"word_plural"	"sturdies"
			"replacement"	"tallowah"
			"replacement_plural"	"tallowah dem"
		}

		"1"
		{
			"word"	"style"
			"word_plural"	"styles"
			"replacement"	"pattan"
			"replacement_plural"	"pattan dem"
		}

		"1"
		{
			"word"	"sunglasses"
			"replacement"	"darkers"
		}

		"1"
		{
			"word"	"surprise"
			"word_plural"	"surprises"
			"replacement"	"blow"
			"replacement_plural"	"blow dem"
		}

		"1"
		{
			"word"	"sweetened"
			"word_plural"	"sweeteneds"
			"replacement"	"asham"
			"replacement_plural"	"asham dem"
		}

		"1"
		{
			"word"	"swindle"
			"word_plural"	"swindles"
			"replacement"	"bandulu"
			"replacement_plural"	"bandulu dem"
		}

		"1"
		{
			"word"	"swollen"
			"word_plural"	"swollens"
			"replacement"	"bufu-bufu"
			"replacement_plural"	"bufu-bufu dem"
		}

		"1"
		{
			"prev"	"swollen"
			"word"	"penis"
			"replacement"	"boasin tone"
		}

		"1"
		{
			"word"	"sympathy"
			"word_plural"	"sympathies"
			"replacement"	"hush"
			"replacement_plural"	"hush dem"
		}

		"1"
		{
			"word"	"system"
			"word_plural"	"systems"
			"replacement"	"babylon"
			"replacement_plural"	"babylon dem"
		}

		"1"
		{
			"word"	"t-shirt"
			"replacement"	"gansey"
		}

		"1"
		{
			"word"	"take"
			"word_plural"	"takes"
			"replacement"	"control"
			"replacement_plural"	"control dem"
		}

		"1"
		{
			"prev"	"tank-top"
			"word"	"style"
			"replacement"	"marina"
		}

		"1"
		{
			"word"	"termites"
			"replacement"	"duck-ants"
		}

		"1"
		{
			"word"	"testicles"
			"replacement"	"boasin tone"
		}

		"1"
		{
			"word"	"than"
			"word_plural"	"thans"
			"replacement"	"an"
			"replacement"	"dan"
			"replacement_plural"	"an dem"
			"replacement_plural"	"dan dem"
		}

		"1"
		{
			"word"	"theif"
			"word_plural"	"theifs"
			"replacement"	"teif"
			"replacement_plural"	"teif dem"
		}

		"1"
		{
			"prev"	"thick"
			"word"	"skulled"
			"replacement"	"iez-haad"
			"replacement"	"hiez-haad"
		}

		"1"
		{
			"word"	"thin"
			"word_plural"	"thins"
			"replacement"	"maga"
			"replacement"	"winjy"
			"replacement_plural"	"maga dem"
			"replacement_plural"	"winjy dem"
		}

		"1"
		{
			"word"	"thorn"
			"word_plural"	"thorns"
			"replacement"	"macca"
			"replacement_plural"	"macca dem"
		}

		"1"
		{
			"word"	"time"
			"word_plural"	"times"
			"replacement"	"i-wah"
			"replacement_plural"	"i-wah dem"
		}

		"1"
		{
			"word"	"tiny"
			"word_plural"	"tinies"
			"replacement"	"lilly bit"
			"replacement_plural"	"lilly bit dem"
		}

		"1"
		{
			"prev"	"tiny"
			"word"	"piece"
			"replacement"	"kemps"
		}

		"1"
		{
			"prev"	"tire"
			"word"	"rubber"
			"replacement"	"shampata"
		}

		"1"
		{
			"word"	"tomorrow"
			"word_plural"	"tomorrows"
			"replacement"	"first light"
			"replacement"	"inna di morrows"
			"replacement_plural"	"first light dem"
			"replacement_plural"	"inna di morrows dem"
		}

		"1"
		{
			"prev"	"too"
			"word"	"big"
			"replacement"	"bufu-bufu"
		}

		"1"
		{
			"word"	"totally"
			"word_plural"	"totallies"
			"replacement"	"fullness"
			"replacement"	"to the fullness"
			"replacement_plural"	"fullness dem"
			"replacement_plural"	"to the fullness dem"
		}

		"1"
		{
			"prev"	"tough"
			"word"	"guy"
			"replacement"	"rude boy"
		}

		"1"
		{
			"word"	"tramp"
			"word_plural"	"tramps"
			"replacement"	"buguyaga"
			"replacement_plural"	"buguyaga dem"
		}

		"1"
		{
			"word"	"trials"
			"replacement"	"crosses"
		}

		"1"
		{
			"word"	"trickster"
			"word_plural"	"tricksters"
			"replacement"	"ginnal"
			"replacement"	"samfai man"
			"replacement_plural"	"ginnal dem"
			"replacement_plural"	"samfai man dem"
		}

		"1"
		{
			"word"	"tricky"
			"word_plural"	"trickies"
			"replacement"	"pyaka"
			"replacement_plural"	"pyaka dem"
		}

		"1"
		{
			"word"	"trouble"
			"word_plural"	"troubles"
			"replacement"	"hackle"
			"replacement_plural"	"hackle dem"
		}

		"1"
		{
			"prev"	"twin"
			"word"	"ticuma"
			"replacement"	"tacumah"
		}

		"1"
		{
			"prev"	"ulterior"
			"word"	"motives"
			"replacement"	"skank"
		}

		"1"
		{
			"word"	"unaccompanied"
			"word_plural"	"unaccompanieds"
			"replacement"	"so-so"
			"replacement_plural"	"so-so dem"
		}

		"1"
		{
			"prev"	"unbearably"
			"word"	"hungry"
			"replacement"	"raw"
		}

		"1"
		{
			"prev"	"uncompromising"
			"word"	"tough"
			"replacement"	"hard"
		}

		"1"
		{
			"word"	"uncouth"
			"word_plural"	"uncouths"
			"replacement"	"bhuttu"
			"replacement_plural"	"bhuttu dem"
		}

		"1"
		{
			"word"	"unfair"
			"word_plural"	"unfairs"
			"replacement"	"fuckery"
			"replacement_plural"	"fuckery dem"
		}

		"1"
		{
			"word"	"unkept"
			"word_plural"	"unkepts"
			"replacement"	"slacky tidy"
			"replacement_plural"	"slacky tidy dem"
		}

		"1"
		{
			"word"	"unreliable"
			"word_plural"	"unreliables"
			"replacement"	"kaba-kaba"
			"replacement_plural"	"kaba-kaba dem"
		}

		"1"
		{
			"word"	"untidy"
			"word_plural"	"untidies"
			"replacement"	"chaka-chaka"
			"replacement_plural"	"chaka-chaka dem"
		}

		"1"
		{
			"word"	"unwilling"
			"word_plural"	"unwillings"
			"replacement"	"iez-haad"
			"replacement"	"hiez-haad"
			"replacement_plural"	"iez-haad dem"
			"replacement_plural"	"hiez-haad dem"
		}

		"1"
		{
			"prev"	"upper"
			"word"	"class"
			"replacement"	"hitey-titey"
		}

		"1"
		{
			"prev"	"upper"
			"word"	"classes"
			"replacement"	"uptown"
		}

		"1"
		{
			"word"	"uproar"
			"word_plural"	"uproars"
			"replacement"	"bangarang"
			"replacement_plural"	"bangarang dem"
		}

		"1"
		{
			"word"	"valuable"
			"word_plural"	"valuables"
			"replacement"	"ilie"
			"replacement_plural"	"ilie dem"
		}

		"1"
		{
			"word"	"vegetables"
			"replacement"	"fit"
		}

		"1"
		{
			"word"	"vehicle"
			"word_plural"	"vehicles"
			"replacement"	"wheels"
			"replacement"	"transport"
			"replacement_plural"	"wheels dem"
			"replacement_plural"	"transport dem"
		}

		"1"
		{
			"prev"	"verbal"
			"word"	"asterisk"
			"replacement"	"tarra-warra"
		}

		"1"
		{
			"prev"	"very"
			"word"	"nutritious"
			"replacement"	"kallaloo"
		}

		"1"
		{
			"word"	"vex"
			"replacement"	"bex"
		}

		"1"
		{
			"word"	"vexation"
			"word_plural"	"vexations"
			"replacement"	"cho"
			"replacement"	"kiss teet"
			"replacement_plural"	"cho dem"
			"replacement_plural"	"kiss teet dem"
		}

		"1"
		{
			"word"	"vexations"
			"replacement"	"crosses"
		}

		"1"
		{
			"word"	"vexed"
			"word_plural"	"vexeds"
			"replacement"	"bex"
			"replacement_plural"	"bex dem"
		}

		"1"
		{
			"word"	"vigorous"
			"replacement"	"rhygin"
		}

		"1"
		{
			"word"	"vine"
			"word_plural"	"vines"
			"replacement"	"wis"
			"replacement_plural"	"wis dem"
		}

		"1"
		{
			"word"	"violent"
			"word_plural"	"violents"
			"replacement"	"alias"
			"replacement_plural"	"alias dem"
		}

		"1"
		{
			"word"	"vital"
			"word_plural"	"vitals"
			"replacement"	"i-tal"
			"replacement_plural"	"i-tal dem"
		}

		"1"
		{
			"word"	"vultures"
			"replacement"	"peel-head"
		}

		"1"
		{
			"prev"	"want-all"
			"word"	"glutton"
			"replacement"	"harbour shark"
		}

		"1"
		{
			"word"	"warts"
			"replacement"	"cocobay"
		}

		"1"
		{
			"prev"	"watch"
			"word"	"something"
			"replacement"	"pree"
		}

		"1"
		{
			"word"	"wattle"
			"word_plural"	"wattles"
			"replacement"	"wakl"
			"replacement_plural"	"wakl dem"
		}

		"1"
		{
			"word"	"weak"
			"word_plural"	"weaks"
			"replacement"	"so-so"
			"replacement"	"pyaa-pyaa"
			"replacement_plural"	"so-so dem"
			"replacement_plural"	"pyaa-pyaa dem"
		}

		"1"
		{
			"word"	"weakling"
			"word_plural"	"weaklings"
			"replacement"	"saps"
			"replacement"	"maama man"
			"replacement_plural"	"saps dem"
			"replacement_plural"	"maama man dem"
		}

		"1"
		{
			"prev"	"white"
			"word"	"ants"
			"replacement"	"duck-ants"
		}

		"1"
		{
			"prev"	"white"
			"word"	"oppressors"
			"replacement"	"niyabinghi"
		}

		"1"
		{
			"prev"	"white"
			"word"	"slavemaster"
			"replacement"	"bakra"
		}

		"1"
		{
			"word"	"wholesome"
			"word_plural"	"wholesomes"
			"replacement"	"i-tal"
			"replacement_plural"	"i-tal dem"
		}

		"1"
		{
			"prev"	"will"
			"word"	"not"
			"replacement"	"nah"
		}

		"1"
		{
			"word"	"witchcraft"
			"word_plural"	"witchcrafts"
			"replacement"	"science"
			"replacement_plural"	"science dem"
		}

		"1"
		{
			"word"	"woman"
			"word_plural"	"womans"
			"replacement"	"dawta"
			"replacement"	"sister"
			"replacement"	"sistren"
			"replacement_plural"	"dawta dem"
			"replacement_plural"	"sister dem"
			"replacement_plural"	"sistren dem"
		}

		"1"
		{
			"prev"	"woman"
			"word"	"rastafarians"
			"replacement"	"sister"
			"replacement"	"sistren"
		}

		"1"
		{
			"word"	"worry"
			"word_plural"	"worries"
			"replacement"	"hackle"
			"replacement_plural"	"hackle dem"
		}

		"1"
		{
			"word"	"wrong"
			"word_plural"	"wrongs"
			"replacement"	"fuckery"
			"replacement_plural"	"fuckery dem"
		}

		"1"
		{
			"word"	"yard"
			"word_plural"	"yards"
			"replacement"	"gates"
			"replacement"	"ground"
			"replacement_plural"	"gates dem"
			"replacement_plural"	"ground dem"
		}

		"1"
		{
			"prev"	"yoruba"
			"word"	"bosi-proud"
			"replacement"	"boasie"
		}

		"1"
		{
			"prev"	"yoruba"
			"word"	"person"
			"replacement"	"nago"
		}

		"1"
		{
			"prev"	"young"
			"word"	"coconut"
			"replacement"	"jelly"
		}

		"1"
		{
			"prev"	"young"
			"word"	"man"
			"replacement"	"youth"
		}

		"1"
		{
			"word"	"yours"
			"replacement"	"the i"
		}

		"1"
		{
			"word"	"yourself"
			"word_plural"	"yourselfs"
			"replacement"	"the i"
			"replacement_plural"	"the i dem"
		}

		"1"
		{
			"word"	"zapato"
			"word_plural"	"zapatos"
			"replacement"	"shampata"
			"replacement_plural"	"shampata dem"
		}

		"1"
		{
			"prev"	"zinc"
			"word"	"pan"
			"replacement"	"zungu pan"
		}

		"1"
		{
			"word"	"idiot"
			"word"	"fool"
			"word"	"moron"
			"word"	"noob"
			"word"	"newb"
			"word"	"loser"
			"word"	"jerk"
			"word"	"ass"
			"word"	"bastard"
			"word"	"clown"
			"word"	"scrub"
			"word"	"trash"
			"word"	"rat"
			"word_plural"	"idiots"
			"word_plural"	"fools"
			"word_plural"	"morons"
			"word_plural"	"noobs"
			"word_plural"	"newbs"
			"word_plural"	"losers"
			"word_plural"	"jerks"
			"word_plural"	"bastards"
			"word_plural"	"clowns"
			"word_plural"	"scrubs"
			"word_plural"	"trashes"
			"prepend_count"	"2"
			"replacement_prepend"	"dutty"
			"replacement_prepend"	"renk"
			"replacement_prepend"	"wutless"
			"replacement_prepend"	"craven"
			"replacement_prepend"	"fenky-fenky"
			"replacement_prepend"	"chaka-chaka"
			"replacement_prepend"	"salt"
			"replacement_prepend"	"boasie"
			"replacement_prepend"	"picky-picky"
			"replacement"	"mumu"
			"replacement"	"bubu"
			"replacement"	"fool-fool"
			"replacement"	"waste man"
			"replacement"	"jabem"
			"replacement"	"buttu"
			"replacement"	"buguyaga"
			"replacement"	"quashie"
			"replacement"	"bandulu"
			"replacement"	"sketel"
			"replacement"	"soundbwoy"
			"replacement_plural"	"mumu dem"
			"replacement_plural"	"bubu dem"
			"replacement_plural"	"fool-fool dem"
			"replacement_plural"	"waste man dem"
			"replacement_plural"	"jabem dem"
			"replacement_plural"	"buttu dem"
			"replacement_plural"	"buguyaga dem"
			"replacement_plural"	"quashie dem"
			"replacement_plural"	"bandulu dem"
			"replacement_plural"	"sketel dem"
			"replacement_plural"	"soundbwoy dem"
		}

		"1"
		{
			"word"	"!"
			"chance"	"4"
			"replacement"	", rahtid!"
			"replacement"	", star!"
			"replacement"	", seen!"
		}

		"1"
		{
			"word"	"?"
			"chance"	"4"
			"replacement"	", seen?"
			"replacement"	", ya nuh see?"
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
