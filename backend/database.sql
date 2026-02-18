DROP DATABASE IF EXISTS venus_enterprises;
CREATE DATABASE venus_enterprises;
USE venus_enterprises;

CREATE TABLE products (
    name VARCHAR(150) PRIMARY KEY,
    category VARCHAR(50) NOT NULL,
    price INT NOT NULL,
    stock INT NOT NULL,
    image VARCHAR(255) NOT NULL,
    description TEXT NOT NULL
); 
/*wooden products*/
INSERT INTO products VALUES
('Wooden Name Plate','Wooden',700,15,'/images/wooden/wooden-name-plate.jpg',
'A wooden name plate is best suited for homes, villa entrances, apartment doors, office cabins, and studio spaces. Unlike metal plates, wood blends naturally with Indian interiors and does not look overly formal. The engraved or laser-cut text stays visible even after years because the depth is carved into the material.\nCustomization: Name, house number, family name, welcome message, symbols and fonts.\nBest For: Housewarming, new office cabin, wedding gift, first home purchase.\nMaterial: Engineered MDF / teak finish plywood / solid pine wood.\nTypical Size: 12x6 in, 14x8 in, 18x10 in (8-12 mm thick).\nA durable entrance identity plate.');

INSERT INTO products VALUES
('Wooden Pen Stand','Wooden',500,20,'/images/wooden/wooden-pen-stand.jpg',
'A practical daily-use desk accessory preferred in offices and schools.\nCustomization: Name, designation, logo, short quote.\nBest For: Teachers, doctors, office staff, farewell gifts.\nMaterial: MDF wood with laminate or veneer finish.\nTypical Size: 3x3x4 in to 4x4x5 in.\nUseful gift that stays on desk permanently.');

INSERT INTO products VALUES
('Wooden Plaque','Wooden',900,8,'/images/wooden/wooden-plaque.jpg',
'A respectful appreciation piece used when gratitude matters more than glamour.\nCustomization: Full appreciation message, logo, date.\nBest For: Honoring guests and mentors.\nMaterial: MDF base with engraved laminate.\nTypical Size: 8x6 in, 10x8 in, 12x9 in.\nTraditional recognition display.');

INSERT INTO products VALUES
('Wooden Trophy','Wooden',1200,10,'/images/wooden/wooden-trophy.jpg',
'Friendly award suitable for encouragement and school events.\nCustomization: Participant name and category.\nBest For: School competitions and kids events.\nMaterial: MDF layered wooden design.\nTypical Size: 6-10 in height.\nEncouragement focused award.');

INSERT INTO products VALUES
('Wooden Wall Frame','Wooden',1500,5,'/images/wooden/wooden-wall-frame.jpg',
'Used to display memories and quotes with a warm aesthetic.\nCustomization: Photo printing and text.\nBest For: Anniversary gifts and home decor.\nMaterial: Pine wood frame with glass/acrylic front.\nTypical Size: A4, A3, 12x18 in.\nHomely memory display frame.');

/*acrylic products*/

INSERT INTO products VALUES
('Acrylic Award','Acrylic',1400,7,'/images/acrylic/acrylic-award.jpg',
'Transparent professional corporate recognition award.\nCustomization: Logo, name, achievement title.\nBest For: Employee recognition.\nMaterial: Clear cast acrylic.\nTypical Size: 6-9 in height.\nModern corporate award.');

INSERT INTO products VALUES
('Acrylic Trophy','Acrylic',1600,6,'/images/acrylic/acrylic-trophy.jpg',
'Premium modern award balancing prestige and design.\nCustomization: Engraving and logo.\nBest For: Hackathons and competitions.\nMaterial: Premium acrylic.\nTypical Size: 7-11 in height.\nStylish professional trophy.');

INSERT INTO products VALUES
('Acrylic Standee','Acrylic',1000,10,'/images/acrylic/acrylic-standee.jpg',
'Freestanding decorative display piece.\nCustomization: Full photo print.\nBest For: Personal gifting and birthdays.\nMaterial: UV printed acrylic.\nTypical Size: 5-8 in height.\nFun collectible display.');

INSERT INTO products VALUES
('Acrylic Frame','Acrylic',1100,9,'/images/acrylic/acrylic-frame.jpg',
'Clear frame highlighting certificates without distraction.\nCustomization: Printed insert.\nBest For: Certificates and achievements.\nMaterial: Double-layer acrylic.\nTypical Size: A4 or A5.\nSharp visibility display.');

INSERT INTO products VALUES
('Acrylic Desk Item','Acrylic',800,12,'/images/acrylic/acrylic-desk-item.jpg',
'Minimal corporate branding accessory.\nCustomization: Branding text.\nBest For: Corporate gifting.\nMaterial: Acrylic.\nTypical Size: 4x2 in to 8x3 in.\nClean office branding piece.');

/*metal products*/

INSERT INTO products VALUES
('Metal Key Memento','Metal',1300,11,'/images/metal/metal-key-memento.jpg',
'Symbolizes opening or inauguration - represents beginning and success.\nCustomization: Organization name, date, dedication line.\nBest For: Building openings, office launches, foundation ceremonies.\nMaterial: Zinc alloy / Brass plated metal.\nTypical Size: 6-10 in length.\nSymbolic ceremonial key mounted on base.');

INSERT INTO products VALUES
('Metal Memento','Metal',2000,6,'/images/metal/metal-memento.jpg',
'Formal appreciation piece used by organizations and institutions.\nCustomization: Engraved message, logo, recipient name, date.\nBest For: Chief guest honors, official ceremonies.\nMaterial: Etched stainless steel plate on wooden base.\nTypical Size: 10x8 in.\nFormal appreciation display.');

INSERT INTO products VALUES
('Metal Plate','Metal',1700,9,'/images/metal/metal-plate.jpg',
'Allows detailed engraving - long text remains readable for decades.\nCustomization: Long text engraving and dedication details.\nBest For: Commemorations, dedication plaques.\nMaterial: Stainless steel / Brass engraving plate.\nTypical Size: 8x6 in to 12x10 in.\nLong-lasting engraved information plate.');

INSERT INTO products VALUES
('Metal Shield','Metal',2100,5,'/images/metal/metal-shield.jpg',
'Traditional honor award used in sports and academic institutions.\nCustomization: Winner details, ranking, year.\nBest For: Championships and rankings.\nMaterial: Aluminum embossed shield on wood base.\nTypical Size: 8-12 in height.\nPrestige honor award.');

INSERT INTO products VALUES
('Metal Trophy','Metal',2200,4,'/images/metal/metal-trophy.jpg',
'Represents victory and competition.\nCustomization: Winner name, category, year, logo plate.\nBest For: Tournaments and major competitions.\nMaterial: Metal cup (aluminum/brass) + marble or plastic base.\nTypical Size: 10-18 in height.\nClassic competition trophy.');

/*gifts producta*/

INSERT INTO products VALUES
('Corporate Gift Box','Gifts',2500,6,'/images/gifts/corporate-gift-box.jpg',
'Curated festival gift usually containing sweets, dry fruits, or accessories along with branding.\nCustomization: Company branding and message card.\nBest For: Diwali gifting, client relations.\nMaterial: Rigid board box with velvet/laminate finish.\nTypical Size: 10x8x3 in.\nHolds multiple items securely.');

INSERT INTO products VALUES
('Customized Gift Set','Gifts',2700,5,'/images/gifts/customized-gift-set.jpg',
'Multiple personalized items packed together - feels intentional and personal.\nCustomization: Name printing on each item.\nBest For: Employee welcome kits, premium client gifts.\nMaterial: Combination - metal pen, PU diary, bottle, keychain.\nTypical Size: 9x7x2 in.\nPersonalized combo pack.');

INSERT INTO products VALUES
('Executive Gift','Gifts',3000,4,'/images/gifts/executive-gift.jpg',
'Premium quality gifts for senior professionals.\nCustomization: Name engraving and brand logo.\nBest For: Directors, partners, VIP guests.\nMaterial: Premium metal + leatherette + wood.\nTypical Size: varies (pen 14 cm, diary A5).\nHigher quality finishing for senior professionals.');

INSERT INTO products VALUES
('Desk Gift Item','Gifts',900,15,'/images/gifts/desk-gift-item.jpg',
'Safe gifting option when recipient preference is unknown.\nCustomization: Logo or name engraving.\nBest For: Conferences, formal visits.\nMaterial: Metal/acrylic/wood combinations.\nTypical Size: 4-7 in items.\nDaily-use office accessories.');

INSERT INTO products VALUES
('Premium Gift Pack','Gifts',3500,3,'/images/gifts/premium-gift-pack.jpg',
'High-impact presentation focused gift - packaging itself is part of the experience.\nCustomization: Printed branding and insert message.\nBest For: VIP gifting and celebrations.\nMaterial: Magnetic lid rigid box with foam inserts.\nTypical Size: 12x10x4 in.\nPresentation-focused gifting.');

/*momentos products*/

INSERT INTO products VALUES
('Achievement Memento','Mementos',1800,7,'/images/mementos/achievement-memento.jpg',
'Marks personal milestones such as retirement, graduation and promotions.\nCustomization: Personalized achievement text.\nBest For: Retirement, graduation, promotions.\nMaterial: Acrylic or metal plate with wooden base.\nTypical Height: 6-9 in.\nMilestone recognition piece.');

INSERT INTO products VALUES
('Recognition Memento','Mementos',1700,8,'/images/mementos/recognition-memento.jpg',
'Given for contribution rather than winning.\nCustomization: Appreciation message and logo.\nBest For: Volunteers and contributors.\nMaterial: Metal plate on wood base.\nTypical Size: 8x6 in.\nContribution appreciation.');

INSERT INTO products VALUES
('Event Memento','Mementos',1600,10,'/images/mementos/event-memento.jpg',
'Given to participants or attendees as a memory token.\nCustomization: Event name and date.\nBest For: Seminars and workshops.\nMaterial: Acrylic or wooden souvenir.\nTypical Height: 5-7 in.\nMemory token for attendees.');

INSERT INTO products VALUES
('Sports Memento','Mementos',1900,6,'/images/mementos/sports-memento.jpg',
'Celebrates participation and team spirit.\nCustomization: Sport type and participant name.\nBest For: School and club sports events.\nMaterial: Resin figure with base.\nTypical Height: 6-10 in.\nParticipation remembrance.');

INSERT INTO products VALUES
('Custom Memento','Mementos',2100,5,'/images/mementos/custom-memento.jpg',
'Story-based gift designed around a specific memory or person.\nCustomization: Fully personalized design.\nBest For: Emotional occasions and special memories.\nMaterial: Mixed (wood/acrylic/metal/photo print).\nTypical Size: 6-12 in.\nMost emotional category - often preserved permanently.');

/*marbel products*/

INSERT INTO products VALUES
('Decorative Marble Figure','Marble',2500,5,'/images/marble/decorative-marble-figure.jpg',
'Pure décor item enhancing living room aesthetics.\nCustomization: Usually none.\nBest For: Interior decoration gifting.\nMaterial: Polished artificial marble / marble dust composite.\nTypical Height: 5-9 in.\nIndoor décor piece.');

INSERT INTO products VALUES
('Marble Buddha Idol','Marble',3800,4,'/images/marble/marble-buddha-idol.jpg',
'Represents peace - commonly placed in workspaces.\nCustomization: Optional base engraving.\nBest For: Office desks and meditation areas.\nMaterial: White marble or marble composite.\nTypical Height: 4-8 in.\nPeaceful décor piece.');

INSERT INTO products VALUES
('Marble Ganesha Idol','Marble',4200,2,'/images/marble/marble-ganesha-idol.jpg',
'Gift for beginnings and prosperity - safest universal Indian gift.\nCustomization: Base name or date engraving.\nBest For: Housewarming and festivals.\nMaterial: Marble powder stone / natural marble.\nTypical Height: 4-10 in.\nAuspicious gift.');

INSERT INTO products VALUES
('Marble Krishna Idol','Marble',4000,3,'/images/marble/marble-krishna-idol.jpg',
'Emotional and devotional - often gifted to elders or families.\nCustomization: Optional base engraving.\nBest For: Family gifting and devotional spaces.\nMaterial: Marble composite.\nTypical Height: 6-12 in.\nDevotional display idol.');

INSERT INTO products VALUES
('Marble Showpiece','Marble',3000,6,'/images/marble/marble-showpiece.jpg',
'Neutral décor suitable for any interior style.\nCustomization: Minimal optional engraving.\nBest For: Universal gifting.\nMaterial: Decorative marble cast.\nTypical Size: 5-10 in.\nNeutral décor gift.');

SELECT COUNT(*) FROM products;
SELECT name, LENGTH(description) FROM products;


