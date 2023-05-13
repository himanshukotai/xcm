import React from "react";
import "../DesignItem/DesignItem.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function DesignItem(props) {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <>
      <motion.div
        layoutId={props.designItem.id}
        onClick={() => setSelectedId(props.designItem.id)}
      >
        <img
          className="card-image-top img-fluid"
          src={props.designItem.image}
        ></img>
        <motion.div className="card-body">
          <motion.h5 className="card-title">{props.designItem.type}</motion.h5>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {selectedId && (
          <motion.div layoutId={selectedId}>
            <img
              className="card-image-top img-fluid"
              src={props.designItem.image}
            ></img>
            <motion.div className="card-body">
              <motion.h5 className="card-title">
                {props.designItem.type}
              </motion.h5>
            </motion.div>
            <motion.button onClick={() => setSelectedId(null)} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="card">
        <img
          className="card-image-top img-fluid
    "
          src={props.designItem.image}
        ></img>
      </div>
    </>
  );
}

export default DesignItem;
