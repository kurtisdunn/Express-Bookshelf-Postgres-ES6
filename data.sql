--
-- PostgreSQL database dump
--

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

--
-- Name: cars; Type: COMMENT; Schema: -; Owner: user
--

COMMENT ON DATABASE cars IS 'Cars App - ES6 with Grunt, Babel, ExpressJS, SASS, BrowserSync & Postrgesql

https://github.com/kurtisdunn/carsapp';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

--
-- Name: rand(); Type: FUNCTION; Schema: public; Owner: kdunn
--

CREATE FUNCTION rand() RETURNS double precision
    LANGUAGE sql
    AS $$SELECT random();$$;


ALTER FUNCTION public.rand() OWNER TO kdunn;

--
-- Name: substring_index(text, text, integer); Type: FUNCTION; Schema: public; Owner: kdunn
--

CREATE FUNCTION substring_index(text, text, integer) RETURNS text
    LANGUAGE sql
    AS $_$SELECT array_to_string((string_to_array($1, $2)) [1:$3], $2);$_$;


ALTER FUNCTION public.substring_index(text, text, integer) OWNER TO kdunn;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: engine; Type: TABLE; Schema: public; Owner: kdunn; Tablespace: 
--

CREATE TABLE engine (
    id integer NOT NULL,
    type character varying(128),
    location character varying(64),
    size character varying,
    configuration character varying(64),
    cylinders character varying(2),
    camshaft character varying(128),
    "totalValves" character varying(2),
    compression character varying(128),
    "manufacturerEngineCode" character varying(256),
    torque character varying(256),
    pwratio character varying(10),
    acceleration character varying(10),
    model_id character varying,
    power character varying(128)
);


ALTER TABLE engine OWNER TO kdunn;

--
-- Name: COLUMN engine.id; Type: COMMENT; Schema: public; Owner: kdunn
--

COMMENT ON COLUMN engine.id IS 'Row ID';


--
-- Name: COLUMN engine.type; Type: COMMENT; Schema: public; Owner: kdunn
--

COMMENT ON COLUMN engine.type IS 'Engine Type';


--
-- Name: COLUMN engine.location; Type: COMMENT; Schema: public; Owner: kdunn
--

COMMENT ON COLUMN engine.location IS 'Engine Location';


--
-- Name: COLUMN engine.size; Type: COMMENT; Schema: public; Owner: kdunn
--

COMMENT ON COLUMN engine.size IS 'Engine Size (cc)';


--
-- Name: COLUMN engine.configuration; Type: COMMENT; Schema: public; Owner: kdunn
--

COMMENT ON COLUMN engine.configuration IS 'Engine Configuration';


--
-- Name: COLUMN engine.cylinders; Type: COMMENT; Schema: public; Owner: kdunn
--

COMMENT ON COLUMN engine.cylinders IS 'Cylinders';


--
-- Name: COLUMN engine.camshaft; Type: COMMENT; Schema: public; Owner: kdunn
--

COMMENT ON COLUMN engine.camshaft IS 'Camshaft';


--
-- Name: COLUMN engine."totalValves"; Type: COMMENT; Schema: public; Owner: kdunn
--

COMMENT ON COLUMN engine."totalValves" IS 'Valves/Ports per Cylinder';


--
-- Name: COLUMN engine.compression; Type: COMMENT; Schema: public; Owner: kdunn
--

COMMENT ON COLUMN engine.compression IS 'Compression ratio';


--
-- Name: COLUMN engine."manufacturerEngineCode"; Type: COMMENT; Schema: public; Owner: kdunn
--

COMMENT ON COLUMN engine."manufacturerEngineCode" IS 'Engine Code';


--
-- Name: COLUMN engine.torque; Type: COMMENT; Schema: public; Owner: kdunn
--

COMMENT ON COLUMN engine.torque IS 'Torque';


--
-- Name: COLUMN engine.pwratio; Type: COMMENT; Schema: public; Owner: kdunn
--

COMMENT ON COLUMN engine.pwratio IS 'Power to Weight Ratio';


--
-- Name: COLUMN engine.acceleration; Type: COMMENT; Schema: public; Owner: kdunn
--

COMMENT ON COLUMN engine.acceleration IS 'Acceleration 0-100km/h';


--
-- Name: COLUMN engine.model_id; Type: COMMENT; Schema: public; Owner: kdunn
--

COMMENT ON COLUMN engine.model_id IS 'model id';


--
-- Name: COLUMN engine.power; Type: COMMENT; Schema: public; Owner: kdunn
--

COMMENT ON COLUMN engine.power IS 'Power';


--
-- Name: engine_id_seq; Type: SEQUENCE; Schema: public; Owner: kdunn
--

CREATE SEQUENCE engine_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE engine_id_seq OWNER TO kdunn;

--
-- Name: engine_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kdunn
--

ALTER SEQUENCE engine_id_seq OWNED BY engine.id;


--
-- Name: make; Type: TABLE; Schema: public; Owner: kdunn; Tablespace: 
--

CREATE TABLE make (
    id integer NOT NULL,
    make character varying(256)
);


ALTER TABLE make OWNER TO kdunn;

--
-- Name: COLUMN make.id; Type: COMMENT; Schema: public; Owner: kdunn
--

COMMENT ON COLUMN make.id IS 'row id';


--
-- Name: COLUMN make.make; Type: COMMENT; Schema: public; Owner: kdunn
--

COMMENT ON COLUMN make.make IS 'Brand Name';


--
-- Name: make_id_seq; Type: SEQUENCE; Schema: public; Owner: kdunn
--

CREATE SEQUENCE make_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE make_id_seq OWNER TO kdunn;

--
-- Name: make_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kdunn
--

ALTER SEQUENCE make_id_seq OWNED BY make.id;


--
-- Name: model; Type: TABLE; Schema: public; Owner: kdunn; Tablespace: 
--

CREATE TABLE model (
    id integer NOT NULL,
    model character varying(256),
    make_id character varying,
    engine_id character varying(128)
);


ALTER TABLE model OWNER TO kdunn;

--
-- Name: COLUMN model.id; Type: COMMENT; Schema: public; Owner: kdunn
--

COMMENT ON COLUMN model.id IS 'row id';


--
-- Name: COLUMN model.model; Type: COMMENT; Schema: public; Owner: kdunn
--

COMMENT ON COLUMN model.model IS 'Model Name';


--
-- Name: COLUMN model.make_id; Type: COMMENT; Schema: public; Owner: kdunn
--

COMMENT ON COLUMN model.make_id IS 'Brand ID';


--
-- Name: COLUMN model.engine_id; Type: COMMENT; Schema: public; Owner: kdunn
--

COMMENT ON COLUMN model.engine_id IS 'Engine Id';


--
-- Name: model_id_seq; Type: SEQUENCE; Schema: public; Owner: kdunn
--

CREATE SEQUENCE model_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE model_id_seq OWNER TO kdunn;

--
-- Name: model_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kdunn
--

ALTER SEQUENCE model_id_seq OWNED BY model.id;


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: kdunn
--

ALTER TABLE ONLY engine ALTER COLUMN id SET DEFAULT nextval('engine_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: kdunn
--

ALTER TABLE ONLY make ALTER COLUMN id SET DEFAULT nextval('make_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: kdunn
--

ALTER TABLE ONLY model ALTER COLUMN id SET DEFAULT nextval('model_id_seq'::regclass);


--
-- Data for Name: engine; Type: TABLE DATA; Schema: public; Owner: kdunn
--

COPY engine (id, type, location, size, configuration, cylinders, camshaft, "totalValves", compression, "manufacturerEngineCode", torque, pwratio, acceleration, model_id, power) FROM stdin;
1	Piston	Front	2998	In-line	6	DOHC with VVT	4	11	B58B30M0	450Nm @ 1380-5000rpm	159.8 (W/k	5.1 (s)\r	1	\N
\.


--
-- Name: engine_id_seq; Type: SEQUENCE SET; Schema: public; Owner: kdunn
--

SELECT pg_catalog.setval('engine_id_seq', 1, true);


--
-- Data for Name: make; Type: TABLE DATA; Schema: public; Owner: kdunn
--

COPY make (id, make) FROM stdin;
1	Ferrari
2	BMW
\.


--
-- Name: make_id_seq; Type: SEQUENCE SET; Schema: public; Owner: kdunn
--

SELECT pg_catalog.setval('make_id_seq', 2, true);


--
-- Data for Name: model; Type: TABLE DATA; Schema: public; Owner: kdunn
--

COPY model (id, model, make_id, engine_id) FROM stdin;
1	340i	2	\N
2	488 GTB	1	\N
\.


--
-- Name: model_id_seq; Type: SEQUENCE SET; Schema: public; Owner: kdunn
--

SELECT pg_catalog.setval('model_id_seq', 1, true);


--
-- Name: engine_pkey; Type: CONSTRAINT; Schema: public; Owner: kdunn; Tablespace: 
--

ALTER TABLE ONLY engine
    ADD CONSTRAINT engine_pkey PRIMARY KEY (id);


--
-- Name: make_pkey; Type: CONSTRAINT; Schema: public; Owner: kdunn; Tablespace: 
--

ALTER TABLE ONLY make
    ADD CONSTRAINT make_pkey PRIMARY KEY (id);


--
-- Name: model_pkey; Type: CONSTRAINT; Schema: public; Owner: kdunn; Tablespace: 
--

ALTER TABLE ONLY model
    ADD CONSTRAINT model_pkey PRIMARY KEY (id);


--
-- Name: public; Type: ACL; Schema: -; Owner: kdunn
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM kdunn;
GRANT ALL ON SCHEMA public TO kdunn;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

